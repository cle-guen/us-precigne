import { ScheduleEntry } from '@/lib/types';

interface ScheduleTableProps {
  schedule: ScheduleEntry[];
  sportName: string;
}

export default function ScheduleTable({ schedule, sportName }: ScheduleTableProps) {
  // Vérifier s'il y a des notes
  const hasNotes = schedule.some(entry => entry.note && entry.note.trim() !== '');
  
  // Vérifier si tous les lieux sont identiques
  const locations = schedule.map(entry => entry.location).filter(Boolean);
  const uniqueLocations = [...new Set(locations)];
  const hasSingleLocation = uniqueLocations.length === 1;
  const singleLocation = hasSingleLocation ? uniqueLocations[0] : null;

  return (
    <div>
      {/* Section lieu si lieu unique */}
      {hasSingleLocation && singleLocation && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-sm font-medium text-red-900 mb-1">Lieu</h3>
          <p className="text-sm text-red-700">{singleLocation}</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <caption className="sr-only">
            Horaires des cours de {sportName}
          </caption>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jour
              </th>
              <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Horaires
              </th>
              {!hasSingleLocation && (
                <th scope="col" className="hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lieu
                </th>
              )}
              {hasNotes && (
                <th scope="col" className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Note
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-4 text-sm font-medium text-gray-900">
                  <div className="font-semibold">{entry.day}</div>
                  {/* Show location on mobile when multiple locations */}
                  {!hasSingleLocation && entry.location && (
                    <div className="sm:hidden text-xs text-gray-500 mt-1">{entry.location}</div>
                  )}
                  {/* Show note on mobile when exists */}
                  {hasNotes && entry.note && (
                    <div className="md:hidden text-xs text-gray-500 mt-1">{entry.note}</div>
                  )}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-gray-500">
                  <div className="whitespace-nowrap">{entry.time}</div>
                </td>
                {!hasSingleLocation && (
                  <td className="hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.location || '-'}
                  </td>
                )}
                {hasNotes && (
                  <td className="hidden md:table-cell px-3 sm:px-6 py-4 text-sm text-gray-500">
                    {entry.note || '-'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}