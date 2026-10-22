import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="notfound" id="main-content">
      <div>
        <div className="notfound__code" aria-hidden="true">
          404
        </div>
        <h1>Page Not Found</h1>
        <p>
          The page or asset you requested does not exist or has been relocated.
          Explore our capabilities or return to the main stage.
        </p>

        <div className="notfound__actions">
          <ButtonLink href="/" variant="primary" icon="right">
            Back to Homepage
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" icon="up-right">
            Explore Services
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" icon="up-right">
            Get in Touch
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}