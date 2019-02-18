import '../sass/battlefield.scss';

// const battlefield = document.querySelector('#battlefield');

export function renderBattlefield(container) {
    container.innerHTML = `<div class="battlefield__wrapper">
    <div class="battlefield__container">
        <main class="battlefield__main">
    
            <div class="battlefield__top">
                <div class="battlefield__player-block player-block">
                    <img src="" alt="" class="player-block__image">
                    <div class="player-block__info">
                        <p class="player-block__name"></p>
                        <p class="player-block__system"></p>
                    </div>
                </div>
                <div class="battlefield__current-score"></div>
                <div class="battlefield__round-score"></div>
                <div class="battlefield__remaining-cards remaining-cards">
                    <img src="" alt="" class="remaining-cards__image">
                    <p class="remaining-cards__number"></p>
                </div>
                <div class="battlefield__general-card"></div>
                <div class="battlefield__hand hand">
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                </div>
                <div class="battlefield__graveyard"></div>
                <div class="battlefield__remaining-deck"></div>
            </div>
    
    
            <div class="battlefield__middle">
                <div class="middle__left">
                    <div class="left__timer"></div>
                    <div class="left__coin"></div>
                </div>
    
                <div class="middle__center">
                    <div class="middle__opponent">
                        <div class="middle__rows rows">
                            <div class="rows__siege" data-name="opponent-topRow">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__range">
                                <span class="rows__score" data-name="opponent-middleRow"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__melee">
                                <span class="rows__score data-name="opponent-bottomRow""></span>
                                <div class="rows__row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="middle__player">
                        <div class="middle__rows rows">
                            <div class="rows__siege">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__range">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                            <div class="rows__melee">
                                <span class="rows__score"></span>
                                <div class="rows__row"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="middle__right">
                    <div class="right__card"></div>
                    <button class="btn-pass">PASS</button>
                </div>
    
            </div>
    
    
            <div class="battlefield__bottom">
                <div class="battlefield__player-block player-block">
                    <img src="" alt="" class="player-block__image">
                    <div class="player-block__info">
                        <p class="player-block__name"></p>
                        <p class="player-block__system"></p>
                    </div>
                </div>
                <div class="battlefield__current-score"></div>
                <div class="battlefield__round-score"></div>
                <div class="battlefield__remaining-cards remaining-cards">
                    <img src="" alt="" class="remaining-cards__image">
                    <p class="remaining-cards__number"></p>
                </div>
                <div class="battlefield__general-card"></div>
                <div class="battlefield__hand hand">
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                    <div class="hand__card"></div>
                </div>
                <div class="battlefield__graveyard"></div>
                <div class="battlefield__remaining-deck"></div>
            </div>
    
        </main>
    </div>
    </div>`
}