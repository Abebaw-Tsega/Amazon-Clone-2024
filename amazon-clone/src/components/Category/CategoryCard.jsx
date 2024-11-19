import classes from "./category.module.css";

function CategoryCard(data) {
  console.log(data)
  return (
    <div className={classes.category} >
      <a href="">
        <span>
          <h2>{data.data.title}</h2>
        </span>
        <img src={data.data.imageLink} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  )
}

export default CategoryCard;