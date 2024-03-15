import "./App.css"
import Form from "./components/Form"

const App = () => (
  <main className="container mx-auto flex p-4 xl:p-8 justify-center">
    <div className="box-border rounded-lg bg-gray-900 p-4 xl:p-8 shadow-md">
      <h1 className="text-center text-2xl font-bold text-gray-200">
        Psicodiagnostica APC-SPC
      </h1>
      <Form />
    </div>
  </main>
)

export default App
