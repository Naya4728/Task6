import React from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import LifecycleDemo from "./components/LifecycleDemo";

function App() {
  return (
    <>
      <Header title="React Learning Practice" />

      <StudentCard name="Olayinka" course="Frontend Development" />
      <StudentCard name="Stephen" course="Backend Development" />

      <Counter />

      <LifecycleDemo />
    </>
  );
}

export default App;
