import $ from "jquery"

export function moveScroll(sectionId: string) {
    return () => {
        $("html, body").animate(
            {
                scrollTop: $([document.getElementById(sectionId)]).position().top
            },
            1000
        )
    }
}
