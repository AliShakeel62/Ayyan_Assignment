import Style from "../Style/Home.module.css"; // note the .module.css

export default function HomePage() {
  return (
    <div className={Style.container}>
      <h2 className={Style.heading}>Download here</h2>
      <a
        href="https://drive.google.com/uc?export=download&id=1DN0yJQvoM4XoKjnDCUNAPdFwg80_OiXV"
        target="_blank"
        rel="noopener noreferrer"
        className={Style.button}
      >
        Download
      </a>
    </div>
  );
}
