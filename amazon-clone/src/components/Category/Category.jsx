import CategoryInfos  from "./CategoryImgInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
 
  return (
    <section  className={classes.category_container}>
      {
      CategoryInfos.map((infos,index) => {

        return <CategoryCard data={infos}  key={index}/>

          // console.log(infos);
        })
      }
    </section>
  )
}

export default Category;