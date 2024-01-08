const BoundingClientRect = () => {
  const handleParentMouse = (e) => {
    let parent = document.querySelector(".parent-component");
    let secondary = document.querySelector(".secondary-component");
    const rect1 = parent.getBoundingClientRect();

    parent.addEventListener("mouseleave", (e) => {
      if (e.clientX < rect1.left) {
        secondary.style.display = "none";
      }
      console.log("rec values : ", rect1.left, rect1.right, e.clientX);
    });
  };

  const handleParentClick = () => {
    let parent = document.querySelector(".parent-component");
    let secondary = document.querySelector(".secondary-component");
    secondary.style.display = "block";
  };

  return (
    <div className="bounding-client">
      <header>Header</header>
      <div
        className="parent-component display-hide"
        onMouseLeave={(e) => handleParentMouse(e)}
        onClick={handleParentClick}
      >
        Parent Dropdown
      </div>
      <div className="secondary-component display-hide">Secondary Dropdown</div>
    </div>
  );
};

export default BoundingClientRect;
