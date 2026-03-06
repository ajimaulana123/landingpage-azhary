import { Teacher } from "@/lib/types"
import Image from "next/image"

interface TeacherCardProps {
  teacher: Teacher
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] p-8 border border-emerald-200/50 hover:shadow-2xl transition-all">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl mb-4 shadow-lg overflow-hidden relative">
            <Image 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&size=200&background=10b981&color=fff&bold=true&format=svg`}
              alt={teacher.name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
          <p className="text-emerald-600 font-semibold mb-2">{teacher.title}</p>
          <p className="text-sm text-gray-600">{teacher.education}</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4 text-center">{teacher.bio}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {teacher.expertise.map((skill, idx) => (
            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-emerald-200 font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
