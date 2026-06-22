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

type SvgCanvasRendererProps = {
  definition:
    | GridDiagramDefinition
    | DialDiagramDefinition
    | FlowDiagramDefinition
    | PyramidDiagramDefinition;
};

function SvgCard({
  x,
  y,
  width,
  height,
  fill,
  title,
  subtitle,
  href,
  theme,
  textColor = "#1a1a1a",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  title: string;
  subtitle?: string;
  href?: string;
  theme: ReturnType<typeof getTheme>;
  textColor?: string;
}) {
  const content = (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        filter="url(#cardShadow)"
      />
      {title ? (
        <text
          x={x + width / 2}
          y={subtitle ? y + height / 2 - 8 : y + height / 2 + 5}
          textAnchor="middle"
          fill={textColor}
          fontSize={theme.cardTitleFontSize}
          fontFamily={theme.fontFamily}
          fontWeight={600}
        >
          {title}
        </text>
      ) : null}
      {subtitle ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 14}
          textAnchor="middle"
          fill={theme.cardSubtitleColor}
          fontSize={theme.cardSubtitleFontSize}
          fontFamily={theme.fontFamily}
        >
          {subtitle}
        </text>
      ) : null}
    </g>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

function SvgGridRenderer({ definition }: { definition: GridDiagramDefinition }) {
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
          <g key={card.id}>
            {isTopRow ? (
              <text
                x={card.x + card.width / 2}
                y={card.y - 12}
                textAnchor="middle"
                fill={theme.labelColor}
                fontSize={theme.labelFontSize}
                fontFamily={theme.fontFamily}
                fontWeight={600}
              >
                {card.title}
              </text>
            ) : null}
            {isMiddleRow ? (
              <text
                x={rowLabelX}
                y={card.y + card.height / 2 + 5}
                textAnchor="start"
                fill={theme.labelColor}
                fontSize={theme.rowLabelFontSize}
                fontFamily={theme.fontFamily}
              >
                {card.id === "next_milestone"
                  ? `${card.title} ${card.subtitle ?? ""}`
                  : card.title}
              </text>
            ) : null}
            <SvgCard
              x={card.x}
              y={card.y}
              width={card.width}
              height={card.height}
              fill={resolveColor(theme, card.color)}
              title={isTopRow || isMiddleRow ? "" : card.title}
              subtitle={isMiddleRow ? undefined : card.subtitle}
              href={card.link ? getCardHref(card.link) : undefined}
              theme={theme}
            />
          </g>
        );
      })}

      {definition.columns?.map((column) => (
        <text
          key={column.id}
          x={column.x + (definition.matrix?.cardWidth ?? 130) / 2}
          y={columnLabelY}
          textAnchor="middle"
          fill={theme.labelColor}
          fontSize={theme.columnLabelFontSize}
          fontFamily={theme.fontFamily}
          fontStyle="italic"
        >
          {column.label}
        </text>
      ))}

      {definition.rows?.map((row) => (
        <text
          key={row.id}
          x={rowLabelX}
          y={row.y + (definition.matrix?.cardHeight ?? 130) / 2 + 5}
          textAnchor="start"
          fill={theme.labelColor}
          fontSize={theme.rowLabelFontSize}
          fontFamily={theme.fontFamily}
        >
          {row.label}
        </text>
      ))}

      {matrixCells.map((cell) => (
        <SvgCard
          key={`${cell.rowId}-${cell.columnId}`}
          x={cell.x}
          y={cell.y}
          width={cell.width}
          height={cell.height}
          fill={resolveColor(theme, cell.color)}
          title=""
          theme={theme}
        />
      ))}
    </>
  );
}

function SvgDialRenderer({ definition }: { definition: DialDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const barWidth = 640;
  const barHeight = 72;
  const gap = 10;
  const startX = (definition.canvas.width - barWidth) / 2;
  const startY = 48;

  return (
    <>
      {definition.segments.map((segment, index) => {
        const y = startY + index * (barHeight + gap);
        const fill = resolveColor(theme, segment.color);
        const href = segment.link ? getCardHref(segment.link) : undefined;
        const textColor = index >= 3 ? "#ffffff" : theme.cardTextColor;

        const rect = (
          <g>
            <rect
              x={startX}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={fill}
              filter="url(#cardShadow)"
            />
            <text
              x={startX + barWidth / 2}
              y={y + barHeight / 2 + 5}
              textAnchor="middle"
              fill={textColor}
              fontSize={theme.cardTitleFontSize}
              fontFamily={theme.fontFamily}
              fontWeight={600}
            >
              {segment.label}
            </text>
          </g>
        );

        return href ? (
          <a key={segment.id} href={href}>
            {rect}
          </a>
        ) : (
          <g key={segment.id}>{rect}</g>
        );
      })}
    </>
  );
}

function SvgFlowRenderer({ definition }: { definition: FlowDiagramDefinition }) {
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
              <line
                key={`divider-${dividerIndex}`}
                x1={x}
                y1={40}
                x2={x}
                y2={definition.canvas.height - 60}
                stroke="#9ca3af"
                strokeWidth={1}
              />
            );
          })
        : null}

      {definition.stages.map((stage, index) => {
        const x = startX + index * (stageWidth + gap);
        const href = stage.link ? getCardHref(stage.link) : undefined;

        return (
          <g key={stage.id}>
            {stage.columnLabel ? (
              <text
                x={x + stageWidth / 2}
                y={60}
                textAnchor="middle"
                fill={theme.labelColor}
                fontSize={18}
                fontFamily={theme.fontFamily}
                fontWeight={600}
              >
                {stage.columnLabel}
              </text>
            ) : null}
            <SvgCard
              x={x}
              y={stageY}
              width={stageWidth}
              height={stageHeight}
              fill={resolveColor(theme, stage.color)}
              title={stage.title}
              subtitle={stage.subtitle}
              href={href}
              theme={theme}
            />
            {definition.showArrows && index < definition.stages.length - 1 ? (
              <line
                x1={x + stageWidth + 8}
                y1={stageY + stageHeight / 2}
                x2={x + stageWidth + gap - 8}
                y2={stageY + stageHeight / 2}
                stroke="#1a1a1a"
                strokeWidth={2}
                markerEnd="url(#arrowhead)"
              />
            ) : null}
          </g>
        );
      })}

      {definition.annotations?.map((annotation) => {
        const stageIndex = definition.stages.findIndex(
          (stage) => stage.id === annotation.underStageId,
        );
        if (stageIndex < 0) {
          return null;
        }
        const x = startX + stageIndex * (stageWidth + gap) + stageWidth / 2;
        return (
          <text
            key={annotation.text}
            x={x}
            y={definition.canvas.height - 30}
            textAnchor={
              annotation.align === "left"
                ? "start"
                : annotation.align === "right"
                  ? "end"
                  : "middle"
            }
            fill={theme.labelColor}
            fontSize={12}
            fontFamily={theme.fontFamily}
            fontStyle="italic"
          >
            {annotation.text}
          </text>
        );
      })}
    </>
  );
}

function SvgPyramidRenderer({ definition }: { definition: PyramidDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const layerCount = definition.layers.length;
  const pyramidTop = 50;
  const pyramidBottom = definition.canvas.height - 40;
  const pyramidHeight = pyramidBottom - pyramidTop;
  const layerHeight = pyramidHeight / layerCount;
  const maxWidth = 500;
  const minWidth = 120;
  const cx = definition.canvas.width / 2;

  return (
    <>
      {definition.layers.map((layer, index) => {
        const yTop = pyramidBottom - (index + 1) * layerHeight;
        const yBottom = pyramidBottom - index * layerHeight;
        const widthAt = (y: number) =>
          minWidth + (maxWidth - minWidth) * ((y - pyramidTop) / pyramidHeight);
        const topW = widthAt(yTop);
        const bottomW = widthAt(yBottom);
        const topLeft = cx - topW / 2;
        const topRight = cx + topW / 2;
        const bottomLeft = cx - bottomW / 2;
        const bottomRight = cx + bottomW / 2;
        const points = `${topLeft},${yTop} ${topRight},${yTop} ${bottomRight},${yBottom} ${bottomLeft},${yBottom}`;
        const fill = resolveColor(theme, layer.color);
        const href = layer.link ? getCardHref(layer.link) : undefined;
        const midY = yTop + layerHeight / 2;

        const shape = (
          <g>
            <polygon points={points} fill={fill} filter="url(#cardShadow)" />
            <text
              x={cx}
              y={midY + 5}
              textAnchor="middle"
              fill="#ffffff"
              fontSize={14}
              fontFamily={theme.fontFamily}
              fontWeight={600}
            >
              {layer.label}
            </text>
            {layer.leftLabel ? (
              <>
                <text
                  x={bottomLeft - 20}
                  y={midY + 4}
                  textAnchor="end"
                  fill="#dc2626"
                  fontSize={12}
                  fontFamily={theme.fontFamily}
                >
                  {layer.leftLabel}
                </text>
                <line
                  x1={bottomLeft - 12}
                  y1={midY}
                  x2={bottomLeft + 8}
                  y2={midY}
                  stroke="#9ca3af"
                  strokeWidth={1}
                  markerEnd="url(#arrowhead)"
                />
              </>
            ) : null}
            {layer.rightLabel ? (
              <>
                <line
                  x1={bottomRight - 8}
                  y1={midY}
                  x2={bottomRight + 12}
                  y2={midY}
                  stroke="#9ca3af"
                  strokeWidth={1}
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x={bottomRight + 20}
                  y={midY + 4}
                  textAnchor="start"
                  fill="#0d9488"
                  fontSize={12}
                  fontFamily={theme.fontFamily}
                >
                  {layer.rightLabel}
                </text>
              </>
            ) : null}
          </g>
        );

        return href ? (
          <a key={layer.id} href={href}>
            {shape}
          </a>
        ) : (
          <g key={layer.id}>{shape}</g>
        );
      })}
    </>
  );
}

export default function SvgCanvasRenderer({ definition }: SvgCanvasRendererProps) {
  const theme = getTheme(definition.theme);

  return (
    <div>
      <div className="overflow-auto">
        <svg
          viewBox={`0 0 ${definition.canvas.width} ${definition.canvas.height}`}
          width="100%"
          style={{ maxWidth: definition.canvas.width, minWidth: 720 }}
          role="img"
          aria-label={definition.title}
        >
          <defs>
            <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.12" />
            </filter>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#1a1a1a" />
            </marker>
          </defs>
          <rect
            width={definition.canvas.width}
            height={definition.canvas.height}
            fill={definition.canvas.background}
          />

          {definition.type === "grid" ? (
            <SvgGridRenderer definition={definition} />
          ) : definition.type === "dial" ? (
            <SvgDialRenderer definition={definition} />
          ) : definition.type === "flow" ? (
            <SvgFlowRenderer definition={definition} />
          ) : definition.type === "pyramid" ? (
            <SvgPyramidRenderer definition={definition} />
          ) : null}
        </svg>
      </div>
      <DiagramAccreditation accreditation={definition.accreditation} />
    </div>
  );
}
