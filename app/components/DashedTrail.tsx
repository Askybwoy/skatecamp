/**
 * Decorative dashed-green trail from Figma (node 161-2).
 * Sits behind content, positioned absolutely on the page.
 */
export default function DashedTrail() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="dashed-trail"
      src="/assets/svg/dashed_line.svg"
      alt=""
      aria-hidden="true"
    />
  );
}
