import type {
  DialDiagramDefinition,
  FlowDiagramDefinition,
  GridDiagramDefinition,
  PyramidDiagramDefinition,
} from "@/lib/diagram/schema";
import { getTheme, resolveColor } from "@/lib/diagram/themes";
import DiagramAccreditation from "./DiagramAccreditation";

type ResponsiveGridRendererProps = {
  definition:
    | GridDiagramDefinition
    | DialDiagramDefinition
    | FlowDiagramDefinition
    | PyramidDiagramDefinition;
};

function CardBlock({
  color,
  title,
  subtitle,
  minHeight = "6rem",
  textColor = "#1a1a1a",
}: {
  color: string;
  title: string;
  subtitle?: string;
  minHeight?: string;
  textColor?: string;
}) {
  const style = {
    backgroundColor: color,
    boxShadow: "2px 4px 8px rgba(15, 23, 42, 0.12)",
    minHeight,
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
      {title ? <span className="fw-600">{title}</span> : null}
      {subtitle ? <span className="small mt-1" style={{ opacity: 0.8 }}>{subtitle}</span> : null}
    </>
  );

  return <div style={style}>{inner}</div>;
}

function ResponsiveGridDiagram({ definition }: { definition: GridDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const topCards = definition.cards.filter((card) =>
    ["problem", "mission", "vision"].includes(card.id),
  );
  const middleCards = definition.cards.filter((card) =>
    ["ten_year_goal", "next_milestone"].includes(card.id),
  );

  return (
    <>
      <div className="row g-3 mb-4">
        {topCards.map((card) => (
          <div key={card.id} className="col-md-4">
            <p className="text-center fw-600 mb-2">{card.title}</p>
            <CardBlock
              color={resolveColor(theme, card.color)}
              title=""
              minHeight="5.5rem"
            />
          </div>
        ))}
      </div>

      <div className="row g-3 justify-content-center mb-4">
        {middleCards.map((card) => (
          <div key={card.id} className="col-md-6 col-lg-5">
            <p className="text-center fw-600 mb-2">
              {card.title}
              {card.subtitle ? (
                <span className="d-block small text-muted fw-normal">{card.subtitle}</span>
              ) : null}
            </p>
            <CardBlock
              color={resolveColor(theme, card.color)}
              title=""
              minHeight="4.5rem"
            />
          </div>
        ))}
      </div>

      {definition.matrix && definition.rows && definition.columns ? (
        <div className="table-responsive">
          <table className="table table-borderless align-middle mb-0">
            <thead>
              <tr>
                <th scope="col" />
                {definition.columns.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="text-center fst-italic fw-normal"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {definition.matrix.rows.map((rowId) => {
                const row = definition.rows?.find((item) => item.id === rowId);
                if (!row) {
                  return null;
                }

                return (
                  <tr key={row.id}>
                    <th scope="row" className="fw-normal">
                      {row.label}
                    </th>
                    {definition.matrix?.columns.map((columnId) => {
                      const column = definition.columns?.find(
                        (item) => item.id === columnId,
                      );
                      if (!column) {
                        return null;
                      }

                      return (
                        <td key={`${row.id}-${column.id}`}>
                          <CardBlock
                            color={resolveColor(theme, column.color)}
                            title=""
                            minHeight="5.5rem"
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}

function ResponsiveDialDiagram({ definition }: { definition: DialDiagramDefinition }) {
  const theme = getTheme(definition.theme);

  return (
    <ol className="list-unstyled mb-0">
      {definition.segments.map((segment, index) => (
        <li key={segment.id} className="mb-3">
          <div className="d-flex align-items-start gap-3">
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: resolveColor(theme, segment.color),
                color: index >= 3 ? "#ffffff" : "#1a1a1a",
                minWidth: "2rem",
              }}
            >
              {index + 1}
            </span>
            <div className="flex-grow-1">
              <h3 className="text-6 fw-600 mb-1">{segment.label}</h3>
              {segment.description ? (
                <p className="text-muted small mb-1">{segment.description}</p>
              ) : null}
              {segment.example ? (
                <p className="small mb-0 fst-italic">&ldquo;{segment.example}&rdquo;</p>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ResponsiveFlowDiagram({ definition }: { definition: FlowDiagramDefinition }) {
  const theme = getTheme(definition.theme);

  return (
    <div>
      {definition.stages.map((stage, index) => {
        const annotation = definition.annotations?.find(
          (item) => item.underStageId === stage.id,
        );

        return (
          <div key={stage.id} className="mb-3">
            {stage.columnLabel ? (
              <p className="text-center fw-600 mb-2">{stage.columnLabel}</p>
            ) : null}
            <CardBlock
              color={resolveColor(theme, stage.color)}
              title={stage.title}
              subtitle={stage.subtitle}
            />
            {annotation ? (
              <p className="text-center text-muted small fst-italic mt-2 mb-0">
                {annotation.text}
              </p>
            ) : null}
            {index < definition.stages.length - 1 ? (
              <p className="text-center my-2 mb-0">↓</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ResponsivePyramidDiagram({ definition }: { definition: PyramidDiagramDefinition }) {
  const theme = getTheme(definition.theme);
  const layers = [...definition.layers].reverse();

  return (
    <div>
      {layers.map((layer) => (
        <div key={layer.id} className="mb-2">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
            {layer.leftLabel ? (
              <span className="small text-danger">{layer.leftLabel}</span>
            ) : (
              <span />
            )}
            {layer.rightLabel ? (
              <span className="small text-success">{layer.rightLabel}</span>
            ) : (
              <span />
            )}
          </div>
          <CardBlock
            color={resolveColor(theme, layer.color)}
            title={layer.label}
            textColor="#ffffff"
            minHeight="3.5rem"
          />
        </div>
      ))}
    </div>
  );
}

export default function ResponsiveGridRenderer({
  definition,
}: ResponsiveGridRendererProps) {
  const theme = getTheme(definition.theme);

  return (
    <div style={{ backgroundColor: definition.canvas.background, padding: "1.5rem" }}>
      {definition.type === "grid" ? (
        <ResponsiveGridDiagram definition={definition} />
      ) : definition.type === "dial" ? (
        <ResponsiveDialDiagram definition={definition} />
      ) : definition.type === "flow" ? (
        <ResponsiveFlowDiagram definition={definition} />
      ) : definition.type === "pyramid" ? (
        <ResponsivePyramidDiagram definition={definition} />
      ) : null}

      <DiagramAccreditation accreditation={definition.accreditation} />
    </div>
  );
}
