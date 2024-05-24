import Navbar from "./Navbar";

function PageLayout({ leftContent, rightContent, children }) {
  return (
    <div className="page-layout">
      <Navbar leftContent={leftContent} rightContent={rightContent} />
      <div className="page-layout__content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;

