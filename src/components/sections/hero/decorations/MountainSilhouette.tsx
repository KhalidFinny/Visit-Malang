/**
 * Accurate mountain silhouettes of the Malang highlands.
 *
 * From left to right: Arjuno‑Welirang (twin peaks), Bromo (flat‑topped
 * caldera with crater depression), Semeru (tall perfect cone).
 * Peaks are spread wide across the full viewport.
 * Pure SVG — zero image loading.
 */
export default function MountainSilhouette() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[55vh] pointer-events-none select-none z-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax meet"
        aria-hidden="true"
      >
        {/* ── Layer 1: Distant haze (full span) ── */}
        <path
          d="M0 280
             Q80 250 160 260 Q240 230 320 250
             Q400 210 480 230 Q560 190 640 215
             Q720 180 800 200 Q880 160 960 185
             Q1040 150 1120 175 Q1200 160 1280 185
             L1440 170 L1440 400 L0 400Z"
          fill="currentColor"
          className="text-[#1a1a1a]/[0.015]"
        />

        {/* ── Layer 2: Tengger caldera rim (full span) ── */}
        <path
          d="M0 320
             Q100 280 200 300 Q280 250 360 280
             Q440 230 540 260 Q620 210 720 240
             Q820 200 920 230 Q1020 190 1120 220
             Q1220 200 1320 230 L1440 220
             L1440 400 L0 400Z"
          fill="currentColor"
          className="text-[#1a1a1a]/[0.03]"
        />

        {/* ── Layer 3: Arjuno‑Welirang (twin peaks, far left spread) ── */}
        <path
          d="M0 360
             L40 330 Q70 300 100 280
             Q120 260 140 250 Q160 235 180 245
             Q200 230 220 220 Q240 205 260 215
             Q280 225 300 210 Q320 195 340 205
             Q360 200 380 210 Q410 230 440 250
             Q480 270 520 290 Q560 310 600 320
             L1440 280 L1440 400 L0 400Z"
          fill="currentColor"
          className="text-[#1a1a1a]/[0.055]"
        />

        {/* ── Layer 4: Bromo (center-left) + Semeru (far right) ── */}
        <path
          d="M0 380
             L50 360 Q90 340 130 350
             Q170 340 210 350 Q250 340 290 350
             Q330 330 370 340

             /* Arjuno-Welirang front ridge */
             Q410 320 440 310 Q460 290 480 295
             Q500 285 520 290

             /* Bromo begins — wide base sloping up */
             Q550 275 580 265
             Q600 255 620 245
             Q635 235 645 225

             /* Bromo's LEFT crater rim — jagged edge */
             Q652 215 658 210

             /* Bromo's CRATER DEPRESSION */
             Q664 217 672 220

             /* Bromo's RIGHT crater rim */
             Q680 215 688 212

             /* Bromo's right side sloping down */
             Q698 225 710 235
             Q730 250 750 260
             Q780 275 810 285

             /* Gap between Bromo and Semeru */
             Q850 295 880 305
             Q920 310 950 315

             /* Semeru begins — tall steep cone */
             Q970 300 990 280
             Q1010 250 1030 210
             Q1045 170 1060 140

             /* Semeru summit */
             Q1068 115 1075 105

             /* Semeru right side — steep drop */
             Q1082 120 1095 155
             Q1110 190 1125 225
             Q1145 260 1170 290
             Q1200 310 1240 325

             /* Foothills tapering far right */
             Q1300 340 1370 350
             L1440 345 L1440 400 L0 400Z"
          fill="currentColor"
          className="text-[#1a1a1a]/[0.08]"
        />

        {/* ── Bromo crater accent ── */}
        <path
          d="M645 225 Q652 215 658 210 Q664 217 672 220
             Q680 215 688 212 Q694 222 698 230
             Q688 225 672 223 Q658 225 645 225Z"
          fill="currentColor"
          className="text-[#1a1a1a]/[0.12]"
        />
      </svg>
    </div>
  );
}
