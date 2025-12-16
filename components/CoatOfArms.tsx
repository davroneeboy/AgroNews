'use client'

type CoatOfArmsProps = {
  className?: string
  width?: number
  height?: number
}

const CoatOfArms = ({ className = '', width = 60, height = 60 }: CoatOfArmsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Герб Узбекистана"
    >
      {/* Основной круг - зеленый фон */}
      <circle cx="50" cy="50" r="48" fill="#1EB53A" stroke="#003D82" strokeWidth="1.5" />
      
      {/* Внутренний круг */}
      <circle cx="50" cy="50" r="42" fill="#1EB53A" />
      
      {/* Полумесяц (Хумо) - белый */}
      <path
        d="M 28 50 
           A 22 22 0 0 1 72 50
           A 18 18 0 0 0 28 50 Z"
        fill="#FFFFFF"
      />
      
      {/* Внутренняя часть полумесяца */}
      <path
        d="M 32 50 
           A 18 18 0 0 1 68 50
           A 14 14 0 0 0 32 50 Z"
        fill="#1EB53A"
      />
      
      {/* 12 звезд по кругу */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const radius = 32
        const x = 50 + radius * Math.cos(angle)
        const y = 50 + radius * Math.sin(angle)
        const starSize = 2.5
        return (
          <g key={i} transform={`translate(${x}, ${y}) rotate(${i * 30})`}>
            <path
              d={`M 0 -${starSize} 
                 L ${starSize * 0.3} -${starSize * 0.3} 
                 L ${starSize} 0 
                 L ${starSize * 0.3} ${starSize * 0.3} 
                 L 0 ${starSize} 
                 L -${starSize * 0.3} ${starSize * 0.3} 
                 L -${starSize} 0 
                 L -${starSize * 0.3} -${starSize * 0.3} Z`}
              fill="#FFFFFF"
            />
          </g>
        )
      })}
      
      {/* Колосья пшеницы слева */}
      <g transform="translate(15, 60)">
        <path
          d="M 0 0 L 2 -8 L 4 0 L 2 2 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
        <path
          d="M 2 -2 L 3 -10 L 5 -2 L 3 0 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
        <path
          d="M 0 2 L 2 -6 L 4 2 L 2 4 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
      </g>
      
      {/* Колосья пшеницы справа */}
      <g transform="translate(85, 60)">
        <path
          d="M 0 0 L -2 -8 L -4 0 L -2 2 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
        <path
          d="M -2 -2 L -3 -10 L -5 -2 L -3 0 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
        <path
          d="M 0 2 L -2 -6 L -4 2 L -2 4 Z"
          fill="#FFD700"
          stroke="#D4AF37"
          strokeWidth="0.3"
        />
      </g>
      
      {/* Хлопок внизу (упрощенный) */}
      <g transform="translate(50, 75)">
        <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        <circle cx="-2" cy="-1" r="2" fill="#FFFFFF" />
        <circle cx="2" cy="-1" r="2" fill="#FFFFFF" />
        <circle cx="-1" cy="1" r="2" fill="#FFFFFF" />
        <circle cx="1" cy="1" r="2" fill="#FFFFFF" />
      </g>
      
      {/* Лента внизу */}
      <path
        d="M 20 88 
           Q 35 92, 50 90
           Q 65 92, 80 88
           Q 50 96, 20 88 Z"
        fill="#003D82"
      />
    </svg>
  )
}

export default CoatOfArms

