const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  // Math-Logic Reconstruction for the date range
  const copyrightDate = parseInt(since) < currentYear ? `${since}-${currentYear}` : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-8'>
      {/* 使用单一 P 标签实现高信噪比输出 */}
      <p className='font-serif'>
        <i className='fas fa-copyright mr-1' />
        {copyrightDate} 
        <span className='mx-2 font-bold text-gray-800 dark:text-gray-300'>
          {siteConfig('AUTHOR')}
        </span>
        <span className='mx-1 opacity-50'>|</span>
        <span>Mechanical Engineering Archive</span>
      </p>

      {/* 针对 VUT 教授的隐藏技术细节：仅在需要时显示访问统计 */}
      <div className='text-xs opacity-30 mt-2 hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye mr-1' />
        <span className='busuanzi_value_site_pv'></span> views
      </div>
    </footer>
  )
}
