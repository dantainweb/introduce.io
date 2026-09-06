import { useEffect, useState } from 'react'
import { api } from '../api/client'
import type { ExampleEntity } from '../types/api'

export default function HomePage() {
  const [examples, setExamples] = useState<ExampleEntity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<ExampleEntity[]>('/examples')
      .then((res) => setExamples(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="page">
      <h1>GodWord</h1>
      <p className="subtitle">前後端分離 Monorepo 架構</p>

      <section className="card">
        <h2>Examples (來自後端 API)</h2>
        {loading && <p>載入中...</p>}
        {error && <p className="error">錯誤：{error}</p>}
        {!loading && !error && examples.length === 0 && (
          <p>目前沒有資料，請透過 API 新增。</p>
        )}
        {examples.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((ex) => (
                <tr key={ex.id}>
                  <td>{ex.id}</td>
                  <td>{ex.name}</td>
                  <td>{ex.description ?? '-'}</td>
                  <td>{new Date(ex.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}
