interface Props {
  t: (key: string) => string;
}

export default function View({ t }: Props) {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          © {new Date().getFullYear()} — {t("footer.project-disclaimer")}
        </p>
        <p>{t("footer.authors")}</p>
        <p>{t("footer.thanks")}</p>
      </div>
    </footer>
  );
}
