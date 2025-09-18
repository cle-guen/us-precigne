import { ScheduleEntry } from '@/lib/types'

interface ScheduleTableFootballProps {
  schedule: ScheduleEntry[]
  sportName: string
  location?: string
}

export default function ScheduleTableFootball({
  schedule,
  sportName,
  location,
}: ScheduleTableFootballProps) {
  // Vérifier s'il y a des notes
  const hasNotes = schedule.some(
    (entry) => entry.note && entry.note.trim() !== '',
  )

  return (
    <div>
      {/* Section lieu */}
      {location && (
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-1">Lieu</h3>
          <p className="text-sm text-gray-700">{location}</p>
        </div>
      )}

      <div className="overflow-x-auto rounded-lg bg-gray-50 border border-gray-200">
        <table className="min-w-full overflow-hidden">
          <caption className="sr-only">
            Horaires des cours de {sportName}
          </caption>
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Équipe
              </th>
              <th
                scope="col"
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Jour
              </th>
              <th
                scope="col"
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Horaires
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-4 text-sm font-medium text-gray-900">
                  <div className="font-semibold">{entry.note || '-'}</div>
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-gray-500">
                  <div className="whitespace-pre-line">
                    {entry.day.replace(/\s*&\s*/g, '\n')}
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-gray-500">
                  <div className="whitespace-pre-line">
                    {entry.time.replace(/\s*&\s*/g, '\n')}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
