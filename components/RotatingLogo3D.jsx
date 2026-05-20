export default function RotatingLogo3D() {
  return (
    <div className="wm-emerald-hero">
      <div className="wm-emerald-vignette" />
      <div className="wm-emerald-smoke wm-smoke-left" />
      <div className="wm-emerald-smoke wm-smoke-right" />
      <div className="wm-emerald-backlight" />
      <div className="wm-emerald-floor" />

      <div className="wm-emerald-stage">
        <div className="wm-emerald-shadow" />

        <div className="wm-emerald-coin">
          <div className="wm-emerald-coin-edge" />

          <div className="wm-emerald-coin-face">
            <div className="wm-emerald-outer-ring">
              <div className="wm-emerald-inner-dark">
                <span className="wm-emerald-bars">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
          </div>

          <div className="wm-emerald-coin-back">
            <div className="wm-emerald-outer-ring">
              <div className="wm-emerald-inner-dark">
                <span className="wm-emerald-bars">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
