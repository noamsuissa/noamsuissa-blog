import { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"
import { CONFIG } from "site.config"

const Giscus: React.FC = () => {
  const [scheme] = useScheme()
  const router = useRouter()
  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const theme = scheme === 'dark' ? 'dark' : 'light'
    const script = document.createElement('script')
    const anchor = commentsRef.current

    if (!anchor) return

    const giscusConfig = CONFIG.giscus.config

    script.setAttribute('src', 'https://giscus.app/client.js')
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repoId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', giscusConfig.mapping)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
    script.setAttribute('data-input-position', giscusConfig.inputPosition)
    script.setAttribute('data-theme', theme)
    script.setAttribute('data-lang', giscusConfig.lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', 'true')

    anchor.appendChild(script)

    return () => {
      anchor.innerHTML = ''
    }
  }, [scheme, router])

  return (
    <StyledWrapper ref={commentsRef}>
      <div className="giscus-frame"></div>
    </StyledWrapper>
  )
}

export default Giscus

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`
