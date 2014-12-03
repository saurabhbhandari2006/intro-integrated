function getImg(str){
    return defaultImages.path+defaultImages[str]
    if(parent.getImageInGame(parent.currentIntegratedGame,str) === 403)
        return defaultImages.path+defaultImages[str]
    else
        return parent.getImageInGame(parent.currentIntegratedGame,str)
}

function getText(str){
    return defaultText[str]
    if(parent.getTextInGame(parent.currentIntegratedGame,str) === 403)
        return defaultText[str]
    else
        return parent.getTextInGame(parent.currentIntegratedGame,str)
}

window.getImg= getImg
window.getText = getText

//this is the object which contains path for default text and images
defaultImages  ={}
defaultImages.path = "img/";
defaultImages["qt-logo"] = "game_logo.png";
defaultImages["qt-background"] = "background.jpg";
defaultImages["qt-start"] = "start_game.png";
defaultImages["qt-start-hover"] = "start_game_hover.png";
defaultImages["qt-background"] = "background.jpg";
defaultImages["qt-statement-back"] = "speech_bubble_1.png";
defaultImages["qt-options-back"] = "speech_bubble_2.png";
defaultImages["qt-player"] = "player.png";
defaultImages["qt-ai"] = "ai.png";
defaultImages["qt-say-this"] = "say_button.png";
defaultImages["qt-know-more"] = "know_more.png";
defaultImages["qt-left-opt-arrow"] = "leftOpt.png";
defaultImages["qt-right-opt-arrow"] = "rightOpt.png";
defaultImages["qt-meter-bar-bg"] = "meterbar_bg.png";
defaultImages["qt-meter-bar-filled"] = "meter_filled.png";
defaultImages["qt-bot-overlay"] = "bot_overlay.png";
defaultImages["qt-message-box-bg"] = "message_box_bg.jpg";

defaultText = {};
defaultText["qt-meter-text"] = "mood";
defaultText["qt-instruction-header"] = "Instructions";
defaultText["qt-instructions"] = "The main objective of this game is to get the client's '" + getText("qt-meter-text") +
    "' above the limit specified in red. <br /><br />" +
    "To get the meter up, you have to respond to the client with an appropriate statement. " +
    "Each client responds to each statement differently. " +
    "You have to select the best possible response for each statement the client makes. <br /><br />" +
    "If by the end of this interrogation, you do not fulfill the objective, you will lose the client.";



window.defaultImages = defaultImages;
