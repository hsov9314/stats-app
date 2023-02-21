import { IconProps } from './types.local'

export const DocumentIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  borderColor = 'none'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0002 2.3999V5.9999C15.0002 6.66264 15.5374 7.1999 16.2002 7.1999H19.8002M8.40017 17.9999V13.1999M12.0002 17.9999L12.0002 8.3999M15.6002 17.9999V13.1999M18.0002 4.1999C17.4661 3.72204 16.9119 3.15528 16.562 2.78718C16.3292 2.54224 16.0075 2.3999 15.6696 2.3999H6.59989C5.27441 2.3999 4.1999 3.47441 4.19989 4.79989L4.1998 19.1998C4.19979 20.5253 5.2743 21.5998 6.59979 21.5998L17.3998 21.5999C18.7253 21.5999 19.7998 20.5254 19.7998 19.2L19.8002 6.47773C19.8002 6.1709 19.6831 5.87594 19.4702 5.65503C19.0764 5.24655 18.4188 4.57442 18.0002 4.1999Z"
        stroke={borderColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
