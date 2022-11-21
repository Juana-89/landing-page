import { useEffect } from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Blog from "./components/Blog";
import Places from "./components/Places";
import ChosenPlace from "./components/ChosenPlace";

function App() {
  useEffect(() => {
    document.title='Landing Page - Tourism Peru'
  },[])
  return (
    <>
    <Header/>
    <Cover/>
    <Blog/>
    <Places/>
    <ChosenPlace/>
    </>
  )
}

export default App
