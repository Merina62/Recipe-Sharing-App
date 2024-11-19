import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import RecipeDetails from "./Components/RecipeDetails";
import Aboutus from "./Components/Aboutus";
import Meal from "./Components/Meal";
import Cuisine from "./Components/Cuisine";
import Ingredient from "./Components/Ingredient";
import Mealdetails from "./Components/Mealdetails";
import RecipeForm from "./Components/RecipeForm";
import RecipeForm1 from "./Components/RecipeForm1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Meal" element={<Meal />} />
          <Route path="/Cuisine" element={<Cuisine />} />
          <Route path="/Ingredient" element={<Ingredient />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipes/mealtype/:mealType" element={<Mealdetails />} />
          <Route path="/CreateRecipe" element={<RecipeForm />} />
          <Route path="/CreateRecipe1" element={<RecipeForm1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
