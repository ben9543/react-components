const DefaultColorScheme = {
    red:"#EB6850",
    Navy: "#25283D",
    yellow: "#EDC359",
    blue: "#C5DEF0",
    white: "#F4F4F8"
}

export const config = {
    BG_COLOR: "transparent",
    COLOR: "#25283D",
    BORDER_COLOR: "#25283D",
    NUMBER_BG_COLOR: "transparent",
    HEIGHT: "20vh"
};

export const countdown__container_style = (
    bg_color=config.BG_COLOR, 
    color=config.COLOR,
    height=config.HEIGHT) => 
({
    backgroundColor: bg_color,
    color,
    height
});

export const countdown__number_style = (number_bg_color=config.NUMBER_BG_COLOR, border_color=config.BORDER_COLOR) => 
({
    backgroundColor: number_bg_color,
    border: `1px solid ${border_color}`
});