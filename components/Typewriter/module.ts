import TypewriterProps from "../../interfaces/TypewriterProps"
import {Dispatch, RefObject, SetStateAction} from 'react'

const DELETE_DELAY_INTERVALS = 25

const attributes = {
    titleIndex: 'data-title-index',
    charIndex: 'data-char-index',
    delete: 'data-delete-title',
    deleteMark: 'data-delete-mark',
}

export function write(
    props: TypewriterProps,
    contentRef: RefObject<HTMLSpanElement>,
    setBlink: Dispatch<SetStateAction<boolean>>,
    setDeleting: Dispatch<SetStateAction<boolean>>
) {
    const content = contentRef.current
    if (content) {
        const { lastChild } = content
        const titleIndex = parseInt(content.getAttribute(attributes.titleIndex) ?? '0', 10)
        const charIndex = parseInt(content.getAttribute(attributes.charIndex) ?? '0', 10)
        const deleteMark = parseInt(content.getAttribute(attributes.deleteMark) ?? '0', 10)

        const title = props.titles[titleIndex]

        const startDeleting = content.getAttribute(attributes.delete) === 'true'
        const isEndTitle = charIndex === title.length
        const isLastTitle = titleIndex === props.titles.length - 1
        const isDeleting = deleteMark === DELETE_DELAY_INTERVALS

        if (isEndTitle && !startDeleting) {
            content.setAttribute(attributes.delete, 'true')
            setBlink(true)
            setDeleting(true)
        }

        if (startDeleting && !isDeleting) {
            if (deleteMark === DELETE_DELAY_INTERVALS - 1) {
                setBlink(false)
            }
            content.setAttribute(attributes.deleteMark, (deleteMark + 1).toString())
        }

        if (isDeleting && lastChild) {
            content.removeChild(lastChild)
        }

        if (isDeleting && !lastChild) {
            content.setAttribute(attributes.delete, 'false')
            content.setAttribute(attributes.deleteMark, '0')

            content.setAttribute(attributes.charIndex, '0')
            content.setAttribute(
                attributes.titleIndex,
                (isLastTitle ? '0' : titleIndex + 1).toString()
            )

            setDeleting(false)
        }

        if (!isEndTitle) {
            const text = document.createTextNode(title[charIndex])
            content.appendChild(text)

            content.setAttribute(attributes.charIndex, (charIndex + 1).toString())
        }
    }
}