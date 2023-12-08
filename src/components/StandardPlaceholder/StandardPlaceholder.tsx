import "./standardPlaceholder.css";
import useIsMobile from "components/useIsMobile";

function StandardPlaceholder({
  src,
  srcMob,
  link,
  linkMob,
  src2,
  link2,
  settings,
}: any) {
  const { dskSplit }: any = settings || {};
  const isMobile: boolean = useIsMobile();

  const splitForDsk = !isMobile && dskSplit;

  const trueSrc = isMobile ? srcMob || src : src;
  return (
    <div
      className={`standard_placeholder_container ${splitForDsk ? "split" : ""}`}
    >
      <a href={link} className={`${splitForDsk ? "split" : ""}`}>
        <img src={trueSrc} alt="navigation" />
      </a>
      {src2 && (
        <a href={link2} className="split">
          <img src={src2} alt="navigation" />
        </a>
      )}
    </div>
  );
}

export default StandardPlaceholder;
