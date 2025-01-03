import { Table } from "@/components"

const Page = () => {
  return (
    <Table
      columns={[
        {
          name: "name",
          label: "Funcionário"
        },
        {
          name: "age",
          label: "Idade",
          render: (data) => <div>{data} anos</div>
        },
        {
          name: "phone",
          label: "Phone",
        },
        {
          name: "email",
          label: "E-mail",
        },
        {
          name: "position",
          label: "Cargo",
        },
        {
          name: "status",
          label: "Status",
        },
        { 
          name: "department",
          label: "Departamento"
        },
        { 
          name: "salary",
          label: "Salário"
        },
        { 
          name: "hireDate",
          label: "Data de Contratação"
        },
      ]}
    />
  )
}

export default Page