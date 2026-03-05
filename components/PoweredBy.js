import { siteConfig } from '@/lib/config'

/**
 * 个人版权声明组件
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>© {new Date().getFullYear()}</span>
      <span className='font-bold'>Eng. YB</span>
      <span className='ml-1 text-gray-400'>| Mechanical Engineering Archive</span>
    </div>
  )
}
