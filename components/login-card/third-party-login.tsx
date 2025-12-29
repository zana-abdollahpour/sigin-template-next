import { PiAppleLogo, PiLinkedinLogo, PiXLogo } from "react-icons/pi";

export function ThirdPartyLogin() {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="btn-outline w-full justify-center gap-2 font-medium"
      >
        <i className="ph ph-google-logo text-lg"></i>
        <span data-en="Continue with Google" data-fa="ورود با گوگل">
          ورود با گوگل
        </span>
      </button>

      <div className="grid grid-cols-3 gap-3">
        <PiAppleLogo type="button" role="button" className="btn-outline" />
        <PiLinkedinLogo type="button" role="button" className="btn-outline" />
        <PiXLogo type="button" role="button" className="btn-outline" />
      </div>

      {/* <!-- More Socials Accordion --> */}
      <div className="text-center">
        <button
          id="toggleMoreSocials"
          className="text-xs text-(--text-secondary) underline decoration-dotted transition hover:text-(--text-primary)"
          data-en="More options"
          data-fa="سایر گزینه‌ها"
        >
          سایر گزینه‌ها
        </button>

        <div id="extraSocialGrid" className="expandable-grid">
          <div className="social-chip">Microsoft</div>
          <div className="social-chip">Facebook</div>
          <div className="social-chip">Github</div>
          <div className="social-chip">Gitlab</div>
          <div className="social-chip">Discord</div>
        </div>
      </div>
    </div>
  );
}
