import './app-filter.css' 
 
 const AppFilter = () =>{
    return (
      <div className="btn-group">
         <button className="btn btn-dark" type="button">
            Все фильмы
         </button>
         <button className="btn btn-outline-dark" type="button">
            Популярные фильмы
         </button>
         <button className="btn btn-outline-dark" type="button">
            Самые просматриваемые фильмы
         </button>
      </div>
    )
 }

 export default AppFilter