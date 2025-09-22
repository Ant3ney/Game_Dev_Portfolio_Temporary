import React from 'react'
import { render } from 'react-dom'

export default function PrimevalHorizon({
	...rest
}: any) {
return (
  <main
    style={{
      background: "linear-gradient(180deg, #06131a 0%, #0b1a22 100%)",
      color: "#e6f1f5",
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
      lineHeight: 1.6,
      paddingBottom: 64,
    }}
  >
    {/* Header / Hero */}
    <header
      style={{
        paddingTop: 56,
        paddingBottom: 48,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          width: "min(1100px, 100%)",
          margin: "0 auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "6px 10px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(0,153,255,.2), rgba(0,255,204,.2))",
              color: "#8be9ff",
              fontSize: 12,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Primeval Horizon
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 40,
              lineHeight: 1.15,
              letterSpacing: -0.4,
              color: "#ffffff",
            }}
          >
            Accomplishments & Systems I Built
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: 18,
              maxWidth: 680,
              color: "rgba(230,241,245,.9)",
            }}
          >
            UE5 · C++ · GAS · Slate/UMG · Mover Plugin · Replication · Steam
            P2P · Fluid Flux
          </p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
            {[
              "Data-Driven UI",
              "Morph Targets",
              "Materials",
              "Animation",
              "Networking",
              "Build/Packaging",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  color: "#9bd7ff",
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(155,215,255,.25)",
                  background: "rgba(12,28,38,.6)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 18px 40px rgba(0,0,0,.35)",
            background:
              "radial-gradient(120% 120% at 100% 0%, rgba(0,153,255,.25), rgba(0,0,0,0))",
          }}
        >
          <img
            src="https://placehold.co/860x420/0b1a22/FFFFFF?text=Primeval+Horizon"
            alt="Primeval Horizon – gameplay montage"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </header>

    {/* Content */}
    <div
      style={{
        width: "min(1100px, 100%)",
        margin: "0 auto",
        padding: "28px 20px 0",
      }}
    >
      {/* Helper: card */}
      {[
        {
          title: "Customization System (Player-Facing Dino Editor)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Exposed artist-authored morph targets and material parameters to
                players via a clean, data-driven UI. Built end-to-end:
                interfaces, runtime classes, and persistence.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  <strong>Color:</strong> Per-parameter material controls (HSV
                  sliders) with designer locks to prevent off-theme palettes.
                </li>
                <li>
                  <strong>Cosmetics:</strong> Preset styles that apply curated
                  morph-target blends.
                </li>
                <li>
                  <strong>Designer-first:</strong> All options flow from Data
                  Tables—no code needed to add items or rules.
                </li>
                <li>
                  Heavy Slate/UMG and programmatic control of skeletal morph
                  targets and materials.
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Planned in distinct modules → straightforward implementation.
                Data-driven UI enabled rapid iteration for content teams.
              </p>
            </>
          ),
        },
        {
          title: "Stat System (GAS: Growth, Sync, Perks, Effects)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Implemented robust attributes for growing dinos, with perks and
                environmental effects that work in single and multiplayer.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Authored deep <strong>growth &amp; sync effects</strong> that
                  read/modify attributes while accounting for other influences.
                </li>
                <li>
                  Designers set deltas in <em>percent</em> or{" "}
                  <em>absolute</em> units with time-based rates for precise
                  balancing.
                </li>
                <li>
                  Built with correct, opinionated <strong>GAS</strong> patterns
                  to avoid replication pitfalls.
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Takeaway: GAS is opinionated—choose the right pattern early and
                standardize it.
              </p>
            </>
          ),
        },
        {
          title: "Locomotion System (AAA Feel + Mover Integration)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Delivered fluid, “hard-to-break” movement across idle, walk,
                run, crouch, and slide with a clear, maintainable animation
                state machine.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Heavy C++ math: vectors, trig, Euler &amp;{" "}
                  <strong>quaternions</strong>; airtight state management.
                </li>
                <li>
                  Parameters exposed via <strong>GAS attributes</strong> and
                  designer-tunable details.
                </li>
                <li>
                  Integrated with Epic’s <strong>Mover</strong> plugin; learned
                  via source reading and iteration.
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Source-guided learning scales; quaternions keep
                orientation math sane.
              </p>
            </>
          ),
        },
        {
          title: "Replication (First Multiplayer Project)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Implemented reliable network behavior across attributes, ability
                triggers, and movement.
              </p>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Tutorials teach <em>what</em>; production teaches{" "}
                <em>why</em>—that’s where stability comes from.
              </p>
            </>
          ),
        },
        {
          title: "Camera Controls",
          body: (
            <>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Tuned third-person camera with a plugin for an{" "}
                  <strong>AAA</strong> feel.
                </li>
                <li>
                  Dynamic spring-arm length scales with character growth for the
                  right sense of presence.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Project Organization & Architecture",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Led large-scale content structuring with a clear, conventional
                UE layout.
              </p>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Perfect hierarchies don’t exist—optimize for “where
                would I look first?” while following UE naming conventions.
              </p>
            </>
          ),
        },
        {
          title: "Packaged Builds (Debugging & Deployment)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Unblocked shipping by reading build logs, fixing packaging and
                runtime-only issues, and iterating through long build cycles.
              </p>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Deployment pain compounds value; build logs are a map,
                not a wall.
              </p>
            </>
          ),
        },
        {
          title: "Footprint & Scent System",
          body: (
            <>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Networked footprint decals; scent modes reveal nearby prints /
                  players at intended ranges.
                </li>
                <li>
                  Heavily extended a VFX plugin to support X-ray reveals and
                  particle “dead-cell” hints.
                </li>
                <li>
                  Mixed C++, material parameter control, and large Blueprint
                  graphs.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "UI Systems (Main, Settings, Pause, Stats, HUD)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Implemented major UIs (designed most except HUD). Leveraged
                Slate/UMG with responsive layouts—web UI fundamentals transfer
                cleanly.
              </p>
            </>
          ),
        },
        {
          title: "Peer-to-Peer Multiplayer (Steam)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Integrated Steam P2P via plugin; validated behavior in{" "}
                <strong>packaged builds</strong> by reading plugin source and
                triangulating with forums/docs.
              </p>
            </>
          ),
        },
        {
          title: "Dynamic Climbing System (Any Surface)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                Freeform climbing on arbitrary surfaces with orbit/rotation and
                full directional control—designed from first principles.
              </p>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Break problems into known primitives; use{" "}
                <strong>quaternions</strong> for robust orientation.
              </p>
            </>
          ),
        },
        {
          title: "Perk System (Skill Tree + GAS)",
          body: (
            <>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Perks apply Gameplay Effects to modify attributes or add{" "}
                  <strong>Gameplay Tags</strong> consumed by other systems.
                </li>
                <li>
                  Leveraged a skill-tree plugin for UI/structure; customized
                  copy and flow.
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Compose existing systems when they’re sufficient; don’t
                over-engineer.
              </p>
            </>
          ),
        },
        {
          title: "Motion Attack System (MAS)",
          body: (
            <>
              <p style={{ marginTop: 0 }}>
                <em>Abilities:</em> Grapple, Pin, Latch-Ride, Lunge, Lunge-Charge
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Combined <strong>GAS</strong> with <strong>Mover</strong> to
                  manipulate movement while applying effects.
                </li>
                <li>
                  Lunge → on-hit latch for damage or pin if larger; Lunge-Charge
                  enables shared-input Latch-Ride (L4D Jockey-like vector mix).
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Implemented late in the cycle—fast, scalable, conventional.
              </p>
            </>
          ),
        },
        {
          title: "Swimming System (Fluid Flux + Mover)",
          body: (
            <>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>
                  Auto swim at depth; surface rise and bob scale with growth.
                </li>
                <li>
                  Integrated Fluid Flux with Mover by detecting surface Z and
                  setting transforms directly.
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Takeaway: Patient prototyping on scratch projects accelerates
                final integration.
              </p>
            </>
          ),
        },
        {
          title: "Skills & Tools Used",
          body: (
            <p style={{ margin: 0 }}>
              <strong>Languages/Tech:</strong> C++, Blueprint, Slate/UMG, Data
              Tables, Materials, Anim BPs &nbsp;•&nbsp;{" "}
              <strong>Systems:</strong> GAS (Attributes/Effects/Tags),
              Replication, Steam P2P, Mover, Fluid Flux &nbsp;•&nbsp;{" "}
              <strong>Focus:</strong> Data-driven UI, morph/material runtime
              control, state machines, quaternion math, build/packaging
            </p>
          ),
        },
        {
          title: "What I’m Most Proud Of",
          body: (
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>
                Turning artist/designer hooks into{" "}
                <strong>player-friendly tools</strong> (Customization).
              </li>
              <li>
                Shipping <strong>AAA-feeling locomotion</strong> that stays
                stable under stress.
              </li>
              <li>
                Integrating complex third-party systems (Mover, Fluid Flux,
                Steam) and getting them to play nice.
              </li>
              <li>
                Building <strong>designer-centric pipelines</strong> that reduce
                code churn and speed iteration.
              </li>
            </ul>
          ),
        },
      ].map((card) => (
        <section
          key={card.title}
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 16,
            padding: 24,
            margin: "22px 0",
            boxShadow: "0 10px 28px rgba(0,0,0,.25)",
          }}
        >
          <h2
            style={{
              margin: "0 0 10px 0",
              fontSize: 24,
              lineHeight: 1.25,
              color: "#ffffff",
              letterSpacing: -0.2,
            }}
          >
            {card.title}
          </h2>
          <div style={{ color: "rgba(230,241,245,.92)", fontSize: 16 }}>
            {card.body}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer
        style={{
          marginTop: 36,
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          color: "rgba(230,241,245,.8)",
          fontSize: 14,
        }}
      >
        <span>Thanks for reading!</span>
        <a
          href="#top"
          style={{
            color: "#8be9ff",
            textDecoration: "none",
            border: "1px solid rgba(139,233,255,.35)",
            padding: "8px 12px",
            borderRadius: 10,
            background: "rgba(12,28,38,.6)",
          }}
        >
          Back to top
        </a>
      </footer>
    </div>
  </main>
);
}

