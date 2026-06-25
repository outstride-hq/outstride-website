import type {
  DialDiagramDefinition,
  FlowDiagramDefinition,
  GridDiagramDefinition,
  PyramidDiagramDefinition,
} from "@/lib/diagram/schema";
import { getMatrixCells } from "@/lib/diagram/schema";
import { getCardHref } from "@/lib/diagram/links";
import { getTheme, resolveColor } from "@/lib/diagram/themes";
import DiagramAccreditation from "./DiagramAccreditation";

type HtmlCanvasRendererProps = {
  definition:
    | GridDiagramDefinition
    | DialDiagramDefinition
    | FlowDiagramDefinition
    | PyramidDiagramDefinition;
};

type PositionedCardProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  title: string;
  subtitle?: string;
  href?: string;
  showTitleInside?: boolean;
  labelAbove?: string;
  labelLeft?: string;
  textColor?: string;
};

function PositionedCard({
  x,
  y,
  width,
  height,
  color,
  title,
  subtitle,
  href,
  showTitleInside = true,
  labelAbove,
  labelLeft,
  textColor = "#1a1a1a",
}: PositionedCardProps) {
  const cardStyle = {
    position: "absolute" as const,
    left: x,
    top: y,
    width,
    height,
    backgroundColor: color,
    boxShadow: "2px 4px 8px rgba(15, 23, 42, 0.12)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "0.75rem",
    textAlign: "center" as const,
    textDecoration: "none",
    color: textColor,
  };

  const inner = (
    <>
      {showTitleInside && title ? (
        <span className="fw-600" style={{ fontSize: "0.95rem" }}>
          {title}
        </span>
      ) : null}
      {subtitle ? (
        <span className="text-muted" style={{ fontSize: "0.8rem" }}>
          {subtitle}
        </span>
      ) : null}
    </>
  );

  return (
    <>
      {labelAbove ? (
        <div
          style={{
            position: "absolute",
            left: x,
            top: y - 28,
            width,
            textAlign: "center",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          {labelAbove}
        </div>
      ) : null}
      {labelLeft ? (
        <div
          style={{
            position: "absolute",
            left: x - 200,
            top: y + height / 2 - 10,
            width: 190,
            fontSize: "0.85rem",
          }}
        >
          {labelLeft}
        </div>
      ) : null}
      {href ? (
        <a href={href} style={cardStyle}>
          {inner}
        </a>
      ) : (
        <div style={cardStyle}>{inner}</div>
      )}
    </>
  );
}

function HtmlGridRenderer({ definition }: { definition: GridDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const matrixCells = getMatrixCells(definition);
  const rowLabelX = definition.matrix?.rowLabelX ?? 40;
  const columnLabelY = definition.matrix?.columnLabelY ?? 490;

  return (
    <>
      {definition.cards.map((card) => {
        const isTopRow = ["problem", "mission", "vision"].includes(card.id);
        const isMiddleRow = ["ten_year_goal", "next_milestone"].includes(card.id);

        return (
          <PositionedCard
            key={card.id}
            x={card.x}
            y={card.y}
            width={card.width}
            height={card.height}
            color={resolveColor(theme, card.color)}
            title={isTopRow || isMiddleRow ? "" : card.title}
            subtitle={isMiddleRow ? undefined : card.subtitle}
            href={card.link ? getCardHref(card.link) : undefined}
            labelAbove={isTopRow ? card.title : undefined}
            labelLeft={
              isMiddleRow
                ? card.id === "next_milestone"
                  ? `${card.title} ${card.subtitle ?? ""}`
                  : card.title
                : undefined
            }
            showTitleInside={false}
          />
        );
      })}

      {definition.columns?.map((column) => (
        <div
          key={column.id}
          style={{
            position: "absolute",
            left: column.x,
            top: columnLabelY,
            width: definition.matrix?.cardWidth ?? 130,
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "0.85rem",
          }}
        >
          {column.label}
        </div>
      ))}

      {definition.rows?.map((row) => (
        <div
          key={row.id}
          style={{
            position: "absolute",
            left: rowLabelX,
            top: row.y + (definition.matrix?.cardHeight ?? 130) / 2 - 10,
            fontSize: "0.85rem",
          }}
        >
          {row.label}
        </div>
      ))}

      {matrixCells.map((cell) => (
        <PositionedCard
          key={`${cell.rowId}-${cell.columnId}`}
          x={cell.x}
          y={cell.y}
          width={cell.width}
          height={cell.height}
          color={resolveColor(theme, cell.color)}
          title=""
          showTitleInside={false}
        />
      ))}
    </>
  );
}

function HtmlDialRenderer({ definition }: { definition: DialDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const barWidth = 140;
  const barHeight = 48;
  const startX = (definition.canvas.width - barWidth) / 2;
  const startY = 40;

  return (
    <>
      {definition.segments.map((segment, index) => {
        const y = startY + index * (barHeight + 16);
        const width = barWidth + index * 30;
        const x = (definition.canvas.width - width) / 2;
        const href = segment.link ? getCardHref(segment.link) : undefined;

        return (
          <div key={segment.id}>
            <PositionedCard
              x={x}
              y={y}
              width={width}
              height={barHeight}
              color={resolveColor(theme, segment.color)}
              title={segment.label}
              href={href}
              textColor={index >= 3 ? "#ffffff" : "#1a1a1a"}
            />
            {segment.description ? (
              <div
                style={{
                  position: "absolute",
                  left: x + width + 16,
                  top: y + 8,
                  width: 280,
                  fontSize: "0.75rem",
                  color: "#4a4a4a",
                }}
              >
                {segment.description}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

function HtmlFlowRenderer({ definition }: { definition: FlowDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const stageWidth = 180;
  const stageHeight = 140;
  const gap = 80;
  const startX =
    (definition.canvas.width -
      definition.stages.length * stageWidth -
      (definition.stages.length - 1) * gap) /
    2;
  const stageY = 100;

  return (
    <>
      {definition.showDividers
        ? [1, 2].map((dividerIndex) => {
            const x =
              startX + dividerIndex * stageWidth + (dividerIndex - 0.5) * gap;
            return (
              <div
                key={`divider-${dividerIndex}`}
                style={{
                  position: "absolute",
                  left: x,
                  top: 40,
                  width: 1,
                  height: definition.canvas.height - 80,
                  backgroundColor: "#9ca3af",
                }}
              />
            );
          })
        : null}

      {definition.stages.map((stage, index) => {
        const x = startX + index * (stageWidth + gap);
        return (
          <div key={stage.id}>
            {stage.columnLabel ? (
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: 50,
                  width: stageWidth,
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {stage.columnLabel}
              </div>
            ) : null}
            <PositionedCard
              x={x}
              y={stageY}
              width={stageWidth}
              height={stageHeight}
              color={resolveColor(theme, stage.color)}
              title={stage.title}
              subtitle={stage.subtitle}
              href={stage.link ? getCardHref(stage.link) : undefined}
            />
            {definition.showArrows && index < definition.stages.length - 1 ? (
              <div
                style={{
                  position: "absolute",
                  left: x + stageWidth + 20,
                  top: stageY + stageHeight / 2 - 1,
                  width: gap - 40,
                  height: 2,
                  backgroundColor: "#1a1a1a",
                }}
              />
            ) : null}
          </div>
        );
      })}

      {definition.annotations?.map((annotation) => {
        const stageIndex = definition.stages.findIndex(
          (stage) => stage.id === annotation.underStageId,
        );
        if (stageIndex < 0) {
          return null;
        }
        const x = startX + stageIndex * (stageWidth + gap);
        return (
          <div
            key={annotation.text}
            style={{
              position: "absolute",
              left: x,
              top: definition.canvas.height - 40,
              width: stageWidth,
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
          >
            {annotation.text}
          </div>
        );
      })}
    </>
  );
}

function HtmlPyramidRenderer({ definition }: { definition: PyramidDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const layerCount = definition.layers.length;
  const layerHeight = 72;
  const maxWidth = 500;
  const minWidth = 120;
  const startY = 40;
  const cx = definition.canvas.width / 2;

  return (
    <>
      {definition.layers.map((layer, index) => {
        const layerIndex = index;
        const y = startY + (layerCount - 1 - layerIndex) * layerHeight;
        const widthRatio = (layerCount - index) / layerCount;
        const width = minWidth + (maxWidth - minWidth) * widthRatio;
        const x = cx - width / 2;
        const clipPath = `polygon(${((maxWidth - width) / 2 / maxWidth) * 100}% 0%, ${100 - ((maxWidth - width) / 2 / maxWidth) * 100}% 0%, 100% 100%, 0% 100%)`;

        return (
          <div key={layer.id}>
            {layer.leftLabel ? (
              <div
                style={{
                  position: "absolute",
                  left: x - 120,
                  top: y + layerHeight / 2 - 8,
                  color: "#dc2626",
                  fontSize: "0.8rem",
                }}
              >
                {layer.leftLabel} →
              </div>
            ) : null}
            <div
              style={{
                position: "absolute",
                left: x,
                top: y,
                width,
                height: layerHeight,
                backgroundColor: resolveColor(theme, layer.color),
                boxShadow: "2px 4px 8px rgba(15, 23, 42, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 600,
                clipPath,
              }}
            >
              {layer.link ? (
                <a
                  href={getCardHref(layer.link)}
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  {layer.label}
                </a>
              ) : (
                layer.label
              )}
            </div>
            {layer.rightLabel ? (
              <div
                style={{
                  position: "absolute",
                  left: x + width + 12,
                  top: y + layerHeight / 2 - 8,
                  color: "#0d9488",
                  fontSize: "0.8rem",
                }}
              >
                → {layer.rightLabel}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export default function HtmlCanvasRenderer({ definition }: HtmlCanvasRendererProps) {
  const theme = getTheme(definition.theme);

  return (
    <div>
      <div
        className="diagram-canvas-scroll overflow-auto diagram-canvas-inner"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: definition.canvas.width,
          height: definition.canvas.height,
          backgroundColor: definition.canvas.background,
          fontFamily: theme.fontFamily,
        }}
      >
        {definition.type === "grid" ? (
          <HtmlGridRenderer definition={definition} />
        ) : definition.type === "dial" ? (
          <HtmlDialRenderer definition={definition} />
        ) : definition.type === "flow" ? (
          <HtmlFlowRenderer definition={definition} />
        ) : definition.type === "pyramid" ? (
          <HtmlPyramidRenderer definition={definition} />
        ) : null}
      </div>
      <DiagramAccreditation accreditation={definition.accreditation} />
    </div>
  );
}
