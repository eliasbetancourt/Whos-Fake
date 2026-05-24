import PageLayout, { paragraphStyle, inlineLinkStyle } from "./PageLayout";

/**
 * Contact page — static content with a mailto link.
 */
export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <p style={paragraphStyle}>
        Have a question, found a bug, or want to share feedback? We'd love to hear
        from you.
      </p>
      <p style={{ ...paragraphStyle, fontWeight: 600 }}>
        📧 Email:{" "}
        <a href="mailto:whosfakeinsights@gmail.com" style={inlineLinkStyle}>
          whosfakeinsights@gmail.com
        </a>
      </p>
      <p style={{ ...paragraphStyle, marginBottom: 0 }}>
        We aim to respond to all messages within 2–3 business days.
      </p>
    </PageLayout>
  );
}
