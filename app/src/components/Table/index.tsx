import { createArray } from "@/utils/functions";
import { GrEdit, GrTrash, GrFormSearch } from "react-icons/gr";

interface IColumn {
  name: string
  label: string
  render?: (data: string) => void
}

interface ITable {
  columns: IColumn[]
}

export const Table = ({ columns }: ITable) => {

  const currentPage = 1;

  const perPage = 30;

  const data = [
    { name: "Alice Johnson", age: 28, phone: "123-456-7890", position: "Developer", email: "alice.johnson@example.com", status: "Active", department: "Engineering", salary: "$80,000", hireDate: "2022-01-15" },
    { name: "Bob Smith", age: 35, phone: "987-654-3210", position: "Designer", email: "bob.smith@example.com", status: "Inactive", department: "Design", salary: "$70,000", hireDate: "2019-06-10" },
    { name: "Carol Lee", age: 30, phone: "555-123-4567", position: "Product Manager", email: "carol.lee@example.com", status: "Active", department: "Product", salary: "$90,000", hireDate: "2021-03-25" },
    { name: "David Brown", age: 42, phone: "444-555-6666", position: "QA Engineer", email: "david.brown@example.com", status: "Inactive", department: "Quality Assurance", salary: "$65,000", hireDate: "2018-11-05" },
    { name: "Emma Wilson", age: 25, phone: "111-222-3333", position: "Intern", email: "emma.wilson@example.com", status: "Active", department: "Engineering", salary: "$30,000", hireDate: "2023-07-01" },
    { name: "Frank Taylor", age: 29, phone: "777-888-9999", position: "Backend Developer", email: "frank.taylor@example.com", status: "Active", department: "Engineering", salary: "$85,000", hireDate: "2020-11-11" },
    { name: "Grace Martinez", age: 31, phone: "222-333-4444", position: "Frontend Developer", email: "grace.martinez@example.com", status: "Active", department: "Engineering", salary: "$75,000", hireDate: "2021-05-20" },
    { name: "Hannah White", age: 34, phone: "888-777-6666", position: "UI Designer", email: "hannah.white@example.com", status: "Inactive", department: "Design", salary: "$68,000", hireDate: "2019-08-14" },
    { name: "Isaac Green", age: 27, phone: "555-444-3333", position: "Database Admin", email: "isaac.green@example.com", status: "Active", department: "IT", salary: "$78,000", hireDate: "2021-04-01" },
    { name: "Jack Hall", age: 40, phone: "999-000-1111", position: "DevOps Engineer", email: "jack.hall@example.com", status: "Inactive", department: "IT", salary: "$95,000", hireDate: "2018-12-09" },
    { name: "Kathy King", age: 37, phone: "444-555-6666", position: "Scrum Master", email: "kathy.king@example.com", status: "Active", department: "Project Management", salary: "$88,000", hireDate: "2020-03-15" },
    { name: "Liam Moore", age: 32, phone: "666-777-8888", position: "Cloud Engineer", email: "liam.moore@example.com", status: "Active", department: "IT", salary: "$92,000", hireDate: "2019-10-07" },
    { name: "Mia Adams", age: 24, phone: "123-321-1234", position: "Software Tester", email: "mia.adams@example.com", status: "Active", department: "Quality Assurance", salary: "$55,000", hireDate: "2022-05-11" },
    { name: "Nathan Brown", age: 36, phone: "432-123-4321", position: "Tech Lead", email: "nathan.brown@example.com", status: "Active", department: "Engineering", salary: "$100,000", hireDate: "2017-09-23" },
    { name: "Olivia Scott", age: 29, phone: "999-888-7777", position: "Data Scientist", email: "olivia.scott@example.com", status: "Active", department: "Data", salary: "$95,000", hireDate: "2021-06-12" },
    { name: "Paul Lee", age: 26, phone: "222-444-6666", position: "Machine Learning Engineer", email: "paul.lee@example.com", status: "Active", department: "Data", salary: "$110,000", hireDate: "2020-01-28" },
    { name: "Quinn Wilson", age: 41, phone: "777-555-3333", position: "Solution Architect", email: "quinn.wilson@example.com", status: "Inactive", department: "IT", salary: "$120,000", hireDate: "2016-04-05" },
    { name: "Rachel Taylor", age: 30, phone: "333-222-1111", position: "Business Analyst", email: "rachel.taylor@example.com", status: "Active", department: "Business", salary: "$85,000", hireDate: "2020-07-14" },
    { name: "Steve Walker", age: 38, phone: "888-999-1111", position: "Full Stack Developer", email: "steve.walker@example.com", status: "Active", department: "Engineering", salary: "$95,000", hireDate: "2018-02-10" },
    { name: "Alice Johnson", age: 28, phone: "123-456-7890", position: "Developer", email: "alice.johnson@example.com", status: "Active", department: "Engineering", salary: "$80,000", hireDate: "2022-01-15" },
    { name: "Bob Smith", age: 35, phone: "987-654-3210", position: "Designer", email: "bob.smith@example.com", status: "Inactive", department: "Design", salary: "$70,000", hireDate: "2019-06-10" },
    { name: "Carol Lee", age: 30, phone: "555-123-4567", position: "Product Manager", email: "carol.lee@example.com", status: "Active", department: "Product", salary: "$90,000", hireDate: "2021-03-25" },
    { name: "David Brown", age: 42, phone: "444-555-6666", position: "QA Engineer", email: "david.brown@example.com", status: "Inactive", department: "Quality Assurance", salary: "$65,000", hireDate: "2018-11-05" },
    { name: "Emma Wilson", age: 25, phone: "111-222-3333", position: "Intern", email: "emma.wilson@example.com", status: "Active", department: "Engineering", salary: "$30,000", hireDate: "2023-07-01" },
    { name: "Frank Taylor", age: 29, phone: "777-888-9999", position: "Backend Developer", email: "frank.taylor@example.com", status: "Active", department: "Engineering", salary: "$85,000", hireDate: "2020-11-11" },
    { name: "Grace Martinez", age: 31, phone: "222-333-4444", position: "Frontend Developer", email: "grace.martinez@example.com", status: "Active", department: "Engineering", salary: "$75,000", hireDate: "2021-05-20" },
    { name: "Hannah White", age: 34, phone: "888-777-6666", position: "UI Designer", email: "hannah.white@example.com", status: "Inactive", department: "Design", salary: "$68,000", hireDate: "2019-08-14" },
    { name: "Isaac Green", age: 27, phone: "555-444-3333", position: "Database Admin", email: "isaac.green@example.com", status: "Active", department: "IT", salary: "$78,000", hireDate: "2021-04-01" },
    { name: "Jack Hall", age: 40, phone: "999-000-1111", position: "DevOps Engineer", email: "jack.hall@example.com", status: "Inactive", department: "IT", salary: "$95,000", hireDate: "2018-12-09" },
    { name: "Kathy King", age: 37, phone: "444-555-6666", position: "Scrum Master", email: "kathy.king@example.com", status: "Active", department: "Project Management", salary: "$88,000", hireDate: "2020-03-15" },
    { name: "Liam Moore", age: 32, phone: "666-777-8888", position: "Cloud Engineer", email: "liam.moore@example.com", status: "Active", department: "IT", salary: "$92,000", hireDate: "2019-10-07" },
    { name: "Mia Adams", age: 24, phone: "123-321-1234", position: "Software Tester", email: "mia.adams@example.com", status: "Active", department: "Quality Assurance", salary: "$55,000", hireDate: "2022-05-11" },
    { name: "Nathan Brown", age: 36, phone: "432-123-4321", position: "Tech Lead", email: "nathan.brown@example.com", status: "Active", department: "Engineering", salary: "$100,000", hireDate: "2017-09-23" },
    { name: "Olivia Scott", age: 29, phone: "999-888-7777", position: "Data Scientist", email: "olivia.scott@example.com", status: "Active", department: "Data", salary: "$95,000", hireDate: "2021-06-12" },
    { name: "Paul Lee", age: 26, phone: "222-444-6666", position: "Machine Learning Engineer", email: "paul.lee@example.com", status: "Active", department: "Data", salary: "$110,000", hireDate: "2020-01-28" },
    { name: "Quinn Wilson", age: 41, phone: "777-555-3333", position: "Solution Architect", email: "quinn.wilson@example.com", status: "Inactive", department: "IT", salary: "$120,000", hireDate: "2016-04-05" },
    { name: "Rachel Taylor", age: 30, phone: "333-222-1111", position: "Business Analyst", email: "rachel.taylor@example.com", status: "Active", department: "Business", salary: "$85,000", hireDate: "2020-07-14" },
    { name: "Steve Walker", age: 38, phone: "888-999-1111", position: "Full Stack Developer", email: "steve.walker@example.com", status: "Active", department: "Engineering", salary: "$95,000", hireDate: "2018-02-10" },
  ]
  
  return (
    <div className="rounded-md bg-white">
      <div className="flex justify-between p-4">
        <div className="flex gap-2">
          <input type="text" className="border rounded-md px-2" placeholder="Nome" />
          <input type="text" className="border rounded-md px-2" placeholder="E-mail" />
          <input type="text" className="border rounded-md px-2" placeholder="Cargo" />
          <input type="text" className="border rounded-md px-2" placeholder="Departamento" />
          <button type="button" className="bg-sky-500 p-2 rounded-md text-white">
            <GrFormSearch className="w-6 h-6" />
          </button>
        </div>
        <button type="button" className="bg-sky-500 text-white py-2 px-4 rounded-md">Adicionar +</button>
      </div>
      <div className="overflow-x-auto max-h-[500px]">
        <table className="relative w-full rounded-md">
          <thead className="bg-white shadow-md sticky top-0 z-30">
            <tr className="border-b">
              <th></th>
              {columns.map((column: IColumn, key: number) => (
                <th key={key} className="p-4 text-start text-slate-500 whitespace-nowrap">
                  {column.label}
                </th>
              ))}
              <th className="p-4 text-start text-slate-500 sticky right-0 bg-white rounded-tr-md shadow-md">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, perPage).map((entry: any, key: number) => (
              <tr key={key} className="border-b border-slate-200">
                <td className="w-20 text-center">
                  <div className="flex items-center justify-center ps-2">
                    <input
                      type="checkbox"
                      id={`checkbox-${key}`}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`checkbox-${key}`}
                      className="checkmark w-5 h-5 border border-slate-300 rounded-sm cursor-pointer peer-checked:bg-sky-500"
                    ></label>
                  </div>
                </td>

                {columns.map((column: IColumn, key: number) => (
                  <td key={key} className="text-start p-4 whitespace-nowrap">
                    {column.render ? column.render(entry[column.name]) : entry[column.name]}
                  </td>
                ))}

                <td className="p-4 sticky right-0 bg-white shadow-md">
                  <div className="flex gap-3">
                    <button className="p-2 bg-indigo-100 hover:bg-indigo-300 text-indigo-500 rounded-md">
                      <GrEdit className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-red-100 hover:bg-red-300 text-red-500 rounded-md">
                      <GrTrash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="text-gray-500">Exibindo 1 a 5 de {data.length} registros</div>
        <div className="flex gap-2">
          {createArray(data.length / perPage).map((i) => (
            <div key={i} className="flex justify-center items-center border h-10 w-10 rounded-md">{i}</div>
          ))}
        </div>
      </div>
    </div>
  )
}