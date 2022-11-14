import { useEffect } from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Country from "./components/Country";

function App() {
  useEffect(() => {
    document.title='Landing Page - Tourism Peru'
  },[])
  return (
    <>
    <Header/>
    <Cover/>
    <Country/>
    </>
  )
}

export default App
