

export const languageGerman = {
    formating:{
        'main': "Haupt-Anweisung",
        'jailbreak': "Jailbreak Anweisung",
        'chats': "Vergangene Chats",
        'lorebook': "Lore-Buch",
        'globalNote': "Globale Notiz",
        'authorNote': "Anmerkungen des Autors",
        'lastChat': "Letzter Chat",
        "description": "Charakterbeschreibung",
        'personaPrompt':'Anweisung zur Persona',
        'plain': "Einfache Anweisung",
    },
    errors:{
        toomuchtoken: 'Fehler: Die Mindestgröße für die Antwort der KI in Tokens, die Sie angegeben haben, übersteigt die maximale Kontextgröße des Modells',
        unknownModel: 'Fehler: Unbekanntes Modell ausgewählt',
        httpError: 'Fehler: Es ist ein Fehler bei der Anfrage aufgetreten:',
        noData: 'Es befinden sich keine Daten in der Datei oder die Datei ist beschädigt',
        onlyOneChat: 'Es muss mindestens ein Chat vorhanden sein',
        alreadyCharInGroup: "Es gibt bereits einen Charakter mit dem selben Namen in der Gruppe",
        noUserIcon: "Sie müssen zuerst Ihr Icon festlegen",
    },
    showHelp: "Hilfe anzeigen",
    help: {
        model: "Das Hauptmodell, das im Chat verwendet wird",
        submodel: "Ein Hilfsmodell ist ein Modell, das zur Analyse von Emotionen und automatischen Vorschlägen usw. verwendet wird, um die die Konversation dynamischer zu gestalten. GPT-3.5 wird hier empfohlen.",
        oaiapikey: "API-Schlüssel für OpenAI. Sie können sich unter platform.openai.com unter -> account -> api-keys einen API-Schlüssel erstellen",
        mainprompt: "Die Option für den Hauptanstoß legt das Standardverhalten des Modells fest",
        jailbreak: "Die Option für die NSFW/Jailbreak Anweisung wird aktiviert, wenn der NSFW/Jailbreak-Umschalter im Charakter eingeschaltet ist",
        globalNote: "Eine Notiz, die das Modellverhalten stark beeinflusst, auch bekannt als UJB. Funktioniert bei allen Charakteren",
        autoSuggest: "Anweisungen, die verwendet werden, um Optionen zur automatischen Vorschlagsgenerierung für Benutzerantworten zu generieren",
        formatOrder: "Formatierungsreihenfolge der Anweisungen. Weiter unten vorkommende Blöcke wirken sich stärker auf das Modell aus",
        forceUrl: "Wenn es nicht leer ist, wird die Anfrage an die eingegebene URL gesendet",
        tempature: "Niedrigere Werte führen dazu, dass der Charakter den Anweisungen eng folgt, aber eher maschinenähnlicher reagiert.\nHöhere Werte führen zu kreativem Verhalten, aber die Antwort des Charakters kann leichter inkohärent werden.",
        frequencyPenalty: "Höhere Werte verhindern die Verwendung von Wiederholungen vor allem in der Antwort, aber die Antwort des Charakters kann leichter inkohärent werden",
        presensePenalty: "Höhere Werte verhindern die Verwendung von Wiederholungen im gesamten Kontext, aber die Antwort des Charakters kann leichter inkohärent werden",
        sdProvider: "Anbieter für die Bildgenerierung",
        msgSound: "Spielt einen Sound ab, wenn der Charakter antwortet",
        charDesc: "Kurzbeschreibung des Charakters. Dies beeinflusst mittelgradig die Antwort des Charakters",
        charFirstMessage: "Erste Nachricht des Charakters. Dies beeinflusst die Antwort des Charakters stark",
        charNote: "Eine Notiz, die das Modellverhalten stark beeinflusst. Eingebettet in den aktuellen Charakter, auch bekannt als UJB",
        toggleNsfw: "Aktiviert/deaktiviert NSFW/Jailbreak Anweisung",
        lorebook: "Ein Lore-Buch ist ein vom Benutzer erstelltes Wörterbuch für die KI. Die KI sieht es nur, wenn ein entsprechendes Trigger-Wort im Kontext vorkommt.",
        loreName: "Name des Lore (Hat auf die Antwort der KI keine Auswirkung)",
        loreActivationKey: "Wenn eines der Trigger-Wörter im Kontext vorkommt, wird das Lore aktiviert und der entsprechende Anweisungs-Kontext wird berücksichtigt. Trigger-Wörter werden durch Kommata getrennt.",
        loreorder: "Wenn die Insert-Reihenfolge höher ist, wirkt sie sich stärker auf das Modell aus und wird weniger stark beeinträchtigt, wenn viele Lore aktiviert sind",
        bias: "Bias ist ein Schlüssel-Wert Attribut, das die Wahrscheinlichkeit des Vorkommens bestimmter Ausdrücke ändert.\nDas Attribut kann Werte zwischen -100 und 100 annehmen. Ausdrücke mit höheren Werten werden häufiger auftreten, während solche mit niedrigeren Werten seltener auftreten werden.\nAchtung: Stellen Sie sicher, dass der korrekte Tokenizer eingestellt ist, andernfalls kann diese Funktion nicht ordnungsgemäß umgesetzt werden.",
        emotion: "Die Option 'Emotion Images' zeigt ein Bild abhängig von der aktuellen Emotion des Charakters, die anhand seiner/ihrer Antwort analysiert wird. Sie müssen den Emotionsnamen als Wort eingeben (wie z.B. Freude, Glück, Angst usw). Die Emotion mit dem Namen **neutral** wird als Standardemotion verwendet, sofern sie vorhanden ist. Es müssen mindestens 3 Bilder vorhanden sein, damit die Emotionszuweisung ordnungsgemäß funktioniert.",
        imggen: "Die Option 'Image Generation' generiert und zeigt ein Bild aus einem externen Programm an. Das Bild wird anhand des aktuellen Chats generiert, der durch die Bild-Anweisung analysiert wird.\n\nDie Bildgenerierung basiert auf konfigurierbaren Schlüsselwertargumenten, darunter:" 
                + "\n\n Der Schlüssel **'always'** gilt immer und ändert sich nicht. Der Schlüssel '**negative**' gilt immer negativ für die Bildgenerierung"
                + "\n\nObjekte mit dem Wert eines anderen Schlüssels ändern sich entsprechend dem Namen des Schlüssels, während der Chat fortschreitet"
                + "\n\nWenn ein Schlüssel ein Sonderzeichen am Anfang seines Namens enthält, bekommt dieser eine besondere Wirkung"
                + "\n- Wenn der Schlüssel mit **|** beginnt, ändert sich der Wert des Schlüssels nicht"
                + "\n- Wenn der Schlüssel mit **$** beginnt, ändert sich der Wert des Schlüssels höchstwahrscheinlich"
                + "\n\nWenn das Bild zum ersten Mal generiert wird, können Sie es nur ändern, indem Sie 'Aktuelle Bilddatengenerierung' unten modifizieren",

        regexScript: "RegEx-Skript ist ein benutzerdefiniertes Skript, das Zeichenfolgen,\n\ndie IN entsprechen, durch OUT ersetzt. Es gibt vier Optionstypen:"
                + "\n\n- **Eingabe ändern** ändert die Eingabe des Benutzers"
                + "\n\n- **Ausgabe ändern** ändert die Ausgabe des Charakters"
                + "\n\n- **Anforderungsdaten ändern** ändert die aktuellen Chat-Daten beim Senden"
                + "\n\n- **Anzeige ändern** ändert nur den Text bei der Anzeige, ohne Chat-Daten zu ändern"
                + "\n\nIN muss ein RegEx ohne Flags und ohne Schrägstriche am Anfang und Ende sein.\n\nOUT ist eine Zeichenfolge, die Ersetzungsmuster enthalten kann. Dies sind die Muster:"
                + "\n\n- $$\n\n    - fügt $ ein"
                + "\n\n- $&\n\n    - fügt den übereinstimmenden Teilstring ein"
                + "\n\n- $`\n\n    - fügt den Teil der Zeichenfolge ein, der dem übereinstimmenden Teilstring vorausgeht"
                + "\n\n- $1\n\n    - fügt die erste übereinstimmende Gruppe ein. funktioniert mit anderen Nummern wie 2, 3..."
                + "\n\n- $(name)\n\n    - fügt die benannte Gruppe ein\n\nWenn OUT mit **@@** beginnt, ersetzt es nicht die Zeichenfolge, sondern führt stattdessen eine spezielle Wirkung aus, wenn eine übereinstimmende Zeichenfolge gefunden wird"
                + "\n\n- @@emo (Emotionsname)\n\n    - wenn der Charakter den Emotion Images Modus verwendet, wird (Emotionsname) als Emotion festgelegt und die Standardoption verhindert",
        experimental: "Dies ist ein experimentelles Feature und könnte instabil sein",
        oogaboogaURL: "Wenn Ihre WebUI nur eine ältere Version der API unterstützt, sollte Ihre URL in etwa so aussehen *https:.../run/textgen*"
                + "\n\nWenn Ihre WebUI die neue Version der API unterstützt, sollte Ihre URL in etwa so aussehen *https://.../api/v1/generate* – und den API-Server als Host verwenden sowie --api als Argument hinzufügen",
        exampleMessage: "Beispielgespräche, die die Ausgabe des Charakters beeinflussen. Es werden keine Tokens dauerhaft verwendet."
                + "\n\nBeispielformat von Gesprächen:"
                + "\n\n```\n<START>\n{{user}}: hi\n{{char}}: hallo\n<START>\n{{user}}: hi\nHaruhi: hallo\n```"
                + "\n\n```<START>``` markiert den Beginn eines neuen Gesprächs",

        creatorQuotes: "Beachten Sie, dass diese Anmkerung oberhalb der ersten Nachricht angezeigt wird. Sie wird verwendet, um den Benutzer über diesen Charakter zu informieren. Diese Anmerkung wird nicht in die Anweisungen eingespielt und hat deshalb keine Auswirkung auf die Antwort der KI.",
        systemPrompt: "Eine Anweisung, mit der die Haupt-Anweisung aus den Einstellungen ersetzt wird, sofern das Feld nicht leer ist",
        chatNote: "Eine Notiz, die das Verhalten der KI stark beeinflusst. Diese Notiz wird in den aktuellen Chat eingebettet. Auch bekannt als Memory oder UJB.",
        personality: "Eine kurze Beschreibung der Persönlichkeit des Charakters. \n\n**Es wird nicht empfohlen, diese Option dafür zu nutzen. Beschreiben Sie die Persönlichkeit stattdessen in der Charakterbeschreibung.**",
        scenario: "Eine kurze Beschreibung des Szenarios des Charakters. \n\n**Es wird nicht empfohlen, diese Option zu nutzen. Beschreiben Sie das Szenario stattdessen in der Charakterbeschreibung.**",
        utilityBot: "Wenn aktiviert, wird die Haupt-Anweisung ignoriert. \n\n**Es wird nicht empfohlen, diese Option zu nutzen. Modifizieren Sie stattdessen die System-Anweisung.**",
        loreSelective: "Wenn der selektive Modus aktiviert ist, müssen sowohl Trigger-Wort als auch auch das Co-Trigger-Wort übereinstimmen, um den Kontext zu aktivieren",
        loreRandomActivation: "Wenn die Bedingung 'Wahrscheinlichkeit verwenden' aktiviert ist, wird der Kontext mit einer festgelegten Wahrscheinlichkeit, die durch 'Wahrscheinlichkeit' festgelegt wird, jedes Mal aktiviert, wenn eine Chat-Nachricht gesendet wird und die anderen Bedingungen der Überlieferung alle erfüllt sind",
        additionalAssets: "Zusätzliche Assets, die in Ihrem Chat angezeigt werden sollen. \n\n - verwenden Sie `{{raw::<asset name>}}` um als Pfad zu verwenden.\n – verwenden Sie `{{img::<asset name>}}` um als Bild zu verwenden\n - verwenden Sie `{{video::<asset name>}}` um als Video zu verwenden\n – verwenden Sie `{{audio::<asset name>}}` um als Audio zu verwenden\n – es wird empfohlen, dies im HTML Backend einzufügen",
        superMemory: "SupaMemory ermöglicht es Ihrem Charakter, sich mehr Informationen zu 'merken', indem der KI zusammengefasste Daten zugeführt werden.\n\n"
        + "Das SupaMemory-Modell ist ein Modell, das die Zusammenfassung für einen Text erstellt. Davinci  oder GPT-3.5-16k werden empfohlen. Hilfsmodelle hingegen werden nicht empfohlen, es sei denn, es handelt sich um ein ungefiltertes Modell mit mindestens 2000 Tokens Kontextgröße und einer ausgereiften Fähigkeiten, Texte zusammenfassen zu können.\n\n"
        + "Die SupaMemory-Anweisung entscheidet darüber, welche Anweisung konkret zur Zusammenfassung gesendet werden soll. Wenn Sie das Feld leer lassen, wird die Standard-Anweisung verwendet. Es wird empfohlen, es leer zu lassen.\n\n"
        + "Nachdem alles eingerichtet ist, können Sie SupaMemory in den Einstellungen eines Charakters aktivieren",
        replaceGlobalNote: "Sofern dieses Feld ausgefüllt ist, wird es die aktuelle globale Notiz ersetzen",
        backgroundHTML: "Ein Markdown/HTML-Datenblock, der im Backend der Chat-Ausgabe hinzugefügt wird.\n\n Sie können auch zusätzliche Assets verwenden. Zum Beispiel können Sie `{{audio::<Asset-Name}}` für Hintergrundmusik verwenden."
            + "\n\n Zusätzlich können Sie dies mit weiteren Assets verwenden:"
            + "\n - `{{bg::<Asset-Name>}}`: Das Hintergrundbild als Asset einfügen"
    },
    setup: {
        chooseProvider: "Wählen Sie Ihren AI-Anbieter aus",
        openaikey: "OpenAI mit API-Schlüssel (Empfohlen)",
        openaiProxy: "OpenAI Reverse-Proxy",
        setupmodelself: "Andere Option/Ich möchte es selbst einrichten",
        inputApiKey: "Geben Sie Ihren API-Schlüssel hier ein",
        apiKeyhelp: "Sie können den API-Schlüssel erhalten von: ",
        setupSelfHelp: "Richten Sie sich nach dem Willkommensbildschirm selbst ein",
        theme: "Wählen Sie Ihr bevorzugtes Design aus",
        themeDescWifulike: "Für Mobilgeräte ungeeignet",
        themeDescWifuCut: "Geeignet auch für Mobilgeräte",
        themeDescClassic: "Geeignet für alle Geräte",
        texttheme: "Wählen Sie Ihre Textfarbe",
        inputName: "Geben Sie abschließend Ihren Spitznamen ein"
    },
    confirm: "Bestätigen",
    goback: "Zurück",
    botSettings:'Bot-Einstellungen',
    model: "Modell",
    apiKey: 'API-Schlüssel',
    providerURL: 'Anfragen-URL',
    providerJSON: 'Anfragen-Körper JSON',
    mainPrompt: "Haupt-Anweisung",
    jailbreakPrompt: "NSFW/Jailbreak Anweisung",
    globalNote: "Globale Notiz",
    autoSuggest: "Automatische Vorschläge",
    tokens: 'Tokens',
    maxContextSize: 'Maximale Kontextgröße',
    maxResponseSize: 'Maximale Antwortgröße',
    temperature: 'Temperatur',
    frequencyPenalty: 'Häufigkeitslimitierung',
    presensePenalty: 'Auftrittslimitierung',
    advancedSettings: 'Erweitert',
    advancedSettingsWarn: "Warnung: Bitte ändern Sie die folgenden Optionen nicht, wenn Sie nicht exakt wissen, was diese bewirken!",
    formatingOrder: "Formatreihenfolge",
    authorNote: "Autorennotiz",
    firstMessage: 'Erste Nachricht',
    description: 'Beschreibung',
    jailbreakToggle: 'NSFW/Jailbreak umschalten',
    charIcon: "Charaktericon",
    characterDisplay: "Charakteranzeige",
    viewScreen: 'Zusätzlicher Charakterbildschirm',
    none: "Keine",
    emotionImage: "Emotionsbilder",
    noImages: "Keine Bilder",
    noBias: "Keine Voreingenommenheit",
    image: 'Bild',
    name: 'Name',
    emotion: "Emotionsname",
    value: "Wert",
    reroll: 'Regenerieren',
    chatList: 'Chatliste',
    removeChat: "Diese Nachricht entfernen?",
    loreBook: 'Lore-Buch',
    character: "Charakter",
    Chat: "Chat",
    globalLoreInfo: "Charakter spezifisches Lore-Buch gilt für alle Chats mit dem entsprechenden Charakter",
    group: "Gruppe",
    groupLoreInfo: "Gruppen-Lorebuch gilt für alle Chats in der Gruppe",
    localLoreInfo: "Ein Chat Lore-Buch gilt nur für den aktuellen Chat",
    removeConfirm: "Bestätigen Sie, dass Sie Folgendes löschen möchten: ",
    removeConfirm2: "Bitte bestätigen Sie ein weiteres mal, dass Sie Folgendes löschen möchten: ",
    exportConfirm: "Möchten Sie dies exportieren?",
    insertOrder: 'Einfügereihenfolge',
    activationKeys: 'Aktivierungsschlüssel',
    activationKeysInfo: "Kommagetrennt",
    prompt: 'Anweisung',
    loreBookDepth: "Lorebuch-Suchtiefe",
    loreBookToken: "Lorebuch maximal Tokens",
    removeCharacter: "Charakter entfernen",
    removeGroup: "Gruppe entfernen",
    exportCharacter: "Charakter exportieren",
    userSetting: "Benutzereinstellungen",
    username:'Ihr Name',
    userIcon: "Ihr Icon",
    successExport: "Erfolgreich exportiert und in Ihrem Download-Verzeichnis gespeichert",
    successImport: "Erfolgreich importiert",
    importedCharacter: 'Importierter Charakter',
    alwaysActive: "Immer aktiv",
    additionalPrompt: "Zusätzliche Anweisung",
    descriptionPrefix: "Beschreibung Präfix",
    forceReplaceUrl: "Umgekehrter Proxy",
    emotionWarn: "Hilfsmodell wird verwendet",
    plugin: "Plugins",
    language: "Sprache",
    UiLanguage: "UI-Sprache",
    createfromScratch: "Von Grund auf neu erstellen",
    importCharacter: 'Charakter importieren',
    translator: "Übersetzer",
    disabled: "Deaktiviert",
    noPluginSelected: "Modell als Plugin ausgewählt, aber kein Plugin ausgewählt",
    text: "Text",
    UISize: "Chat Textgröße",
    newVersion: "Update gefunden, möchten Sie installieren?",
    display: "Anzeige & Audio",
    useCustomBackground: "Benutzerdefinierter Hintergrund",
    translateInput: "Eingabe übersetzen",
    autoTranslation: "Automatische Übersetzung",
    fullscreen: "Vollbild",
    playMessage:"Nachrichten-Ton abspielen",
    iconSize: "Icon-Größe",
    createGroup: "Gruppenchat erstellen",
    groupIcon: "Gruppenicon",
    single: "Einzel",
    multiple: "Mehrere",
    useCharLorebook: "Verwenden Sie Lores in Charakteren",
    selectChar: "Charakter auswählen",
    askLoadFirstMsg: "Sollen wir die erste Nachricht laden?",
    theme: "Thema",
    editOrder: "Reihenfolge bearbeiten",
    autoMode: "Automatischer Modus",
    submodel: "Hilfsmodell",
    timeOutinSec: "Zeitüberschreitung (in Sekunden)",
    emotionPrompt: "Emotions-Anweisung",
    singleView: "Einzelansicht",
    SpacedView: "Mehrere Charakteransicht",
    emphasizedView: "Doppelte Charakteransicht",
    pluginWarn: "Plugins werden in einer isolierten Umgebung ausgeführten, aber das Installieren von Plugins unbekannter Herkunft könnte Probleme verursachen oder sogar schädlichen Code enthalten",
    createGroupImg: "Gruppenicon generieren",
    waifuWidth: "Breite des Waifu Chat-Bereichs",
    savebackup: "Erstellen und laden Sie ein Backup auf Google hoch",
    loadbackup: "Laden Sie Ihr Backup von Google herunter",
    files: "Daten",
    backupConfirm: "Möchten Sie wirklich die Sicherung speichern?",
    backupLoadConfirm: "Möchten Sie wirklich das Backup laden? Alle Daten gehen verloren!",
    backupLoadConfirm2: "Bitte seien Sie vorsichtig: Sind Sie wirklich sicher, dass Sie das Backup laden möchten? Alle Ihre vorigen Daten gehen dadurch verloren!",
    pasteAuthCode: "Bitte kopieren Sie den Authentifizierungscode aus dem Popup und fügen Sie ihn hier ein:",
    others: "Andere",
    presets: "Voreinstellungen",
    imageGeneration: "Bildgenerierung",
    provider: "Dienstanbieter",
    key: "Schlüssel",
    noData: "Keine Daten",
    currentImageGeneration: "Aktuelle Bildgenerierungsdaten",
    promptPreprocess: "Die Anweisung vorverarbeiten",
    SwipeRegenerate: "Zum Aktualisieren runter wischen",
    instantRemove: "Löschung einer Nachricht sollte alle Folgenachrichten entfernen",
    instantRemoveConfirm: "Möchten Sie nur eine Nachricht entfernen? Wenn Sie Nein auswählen, werden auch die darauf folgenden Nachrichten entfernt",
    textColor: "Textfarbe",
    classicRisu: "Klassisches Risu",
    highcontrast: "Hoher Kontrast",
    quickPreset: "Sie können die Voreinstellung schnell ändern mit Strg + (Index der Voreinstellung)",
    requestretrys:"Anforderungsversuche bei Fehlschlag",
    utilityBot: "Dienstbot",
    ShowLog: "Anforderungsprotokolle anzeigen",
    waifuWidth2: "Waifu Charaktergröße",
    sayNothing:"'Nichts sagen' eingeben, wenn keine Zeichenkette eingegeben wurde",
    regexScript: "Regex-Skript",
    type: "Typ",
    editInput: "Eingabe ändern",
    editOutput: "Ausgabe ändern",
    editProcess: "Anforderungsdaten ändern",
    loadLatest: "Neuestes Backup laden",
    loadOthers: "Andere Backups laden",
    exampleMessage: "Beispielnachricht",
    creatorNotes: "Kommentar des Erstellers",
    systemPrompt: "System-Anweisung",
    characterNotes: "Charakternotizen",
    personality: "Persönlichkeit",
    scenario: "Szenario",
    alternateGreetings: "Alternative Begrüßungen",
    unrecommended: "Nicht empfohlen",
    chatNotes: "Chat-Notizen",
    showUnrecommended: "Nicht empfohlene Einstellungen anzeigen",
    altGreet: "Alternative erste Nachrichten",
    scripts: "Skripte",
    settings: "Einstellungen",
    selective: "Selektiv",
    SecondaryKeys: 'Sekundärschlüssel',
    useGlobalSettings: "Globale Einstellungen verwenden",
    recursiveScanning: "Rekursives Scannen",
    creator: "Ersteller",
    CharVersion: "Charakterversion",
    Speech: "Sprache",
    ToggleSuperMemory: "SupaMemory umschalten",
    SuperMemory:"SupaMemory",
    useExperimental: "Experimentelle Funktionen aktivieren",
    showMemoryLimit: "Speicherlimit anzeigen",
    roundIcons: "Runde Icons",
    streaming: "Streaming",
    chatBot:'Chat Bot',
    otherBots:'Hilfs-KIs',
    user:"Benutzer",
    additionalAssets:"Zusätzliche Medien",
    editDisplay: "Anzeige bearbeiten",
    community: "Gemeinschaft",
    textBackgrounds: "Benutzerdefinierte Farbe für den Textbereich",
    textBorder: "Textkonturen",
    textScreenRound: "Abgerundeter Textbereich",
    textScreenBorder: "Textbildschirmränder",
    ttsReadOnlyQuoted: "Nur Zitate vorlesen",
    ttsStop: "TTS stoppen",
    askRemoval:"Vor dem Löschen nochmal fragen",
    replaceGlobalNote: "Globalnote ersetzen",
    charLoreBook: 'Charakter spezifisches Lore-Buch',
    globalLoreBook: 'Lore Buch',
    globalRegexScript: "Regex",
    accessibility: "Barrierefreiheit",
    sendWithEnter: "Mit Enter senden",
    clickToEdit: "Text zum Bearbeiten anklicken",
    setNodePassword: "Legen Sie Ihr Passwort für die Sicherheit fest",
    inputNodePassword: "Geben Sie Ihr Passwort ein. Wenn Sie sich nicht erinnern können, entfernen Sie save/__password.txt in Ihren Serverdateien und starten Sie den Server neu",
    simple:"Einfach",
    advanced: "Erweitert",
    askReRollAutoSuggestions: "Neue Generierung für automatische Vorschläge",
    creatingSuggestions: "Erstellung von Vorschlägen...",
    orderByOrder: "Nach bestimmter Reihenfolge sprechen",
    removeFromGroup: "Möchten Sie {{char}} wirklich aus der Gruppe entfernen?",
    talkness: "Gesprächigkeit",
    active: "Aktiv",
    loreRandomActivation: "Verwenden Sie Wahrscheinlichkeitsbedingungen",
    activationProbability: "Wahrscheinlichkeit",
    shareCloud: "Auf RisuRealm teilen",
    hub: "RisuRealm",
    tags: "Schlagwörter",
    backgroundHTML: "Hintergrund-Einbettung",
    copied: "Kopiert",
    useChatCopy: "Kopiervorlage für Chatnachrichten verwenden",
    useChatSticker: "Chatsticker verwenden",
    useAdditionalAssetsPreview: "Vorschau für zusätzliche Medien verwenden",
    autoTranslateInput: "Eingabe automatisch übersetzen",
    enterMessageForTranslateToEnglish: "Nachricht eingeben, um sie ins Englische zu übersetzen",
    recent: 'Letzte',
    downloads: 'Downloads',
    trending: "Trends",
    imageCompression: "Bildkompression",
    notLoggedIn: "Sie sind aktuell nicht in Ihrem Account eingeloggt",
    googleDriveInfo: "Verbinden Sie sich mit Google Drive, um Ihre Daten zu synchronisieren",
    googleDriveConnection: "Google Drive Verbindung",
    googleDriveConnected: "Mit Google Drive verbunden",
    SaveDataInAccount: "Daten im Konto speichern",
    dataSavingInAccount: "Daten im Konto speichern",
    logout: "Abmelden",
    loadDataFromAccount: "Daten aus dem Konto laden",
    saveCurrentDataToAccount: "Aktuelle Daten im Konto speichern",
    chatAssumed: "",
    proxyAPIKey: "Proxy-Schlüssel/Passwort",
    proxyRequestModel: "Proxy-Anforderungsmodell",
    officialWiki: "Offizielles Wiki",
    officialWikiDesc: "Offizielles Wiki für RisuAI. Schauen Sie doch gerne bei uns vorbei",
    officialDiscord: "Offizieller Discord",
    officialDiscordDesc: "Offizieller Discord zum Austausch über RisuAI",
    confirmRecommendedPreset: "Für dieses Modell gibt es empfohlene Einstellungen. Möchten Sie die Einstellungen darauf ändern? (Sie können das Fragen in den Zugangseinstellungen ausschalten)",
    toggleConfirmRecommendedPreset: "Bei Modelländerung nach empfohlener Einstellung fragen",
    recommendedPreset: "Auf empfohlene Einstellungen setzen",
    persona: "Mein Profil",
    icon:"Symbol",
    account: "Konto",
    remove: "Entfernen",
    creationSuccess: "Erstellung erfolgreich",
    noweb: "Diese Funktion kann in der Webversion nicht genutzt werden",
    createBotInternet: "Erstellen Sie einen Bot aus dem Internet mit KI",
    createBotInternetAlert: "Bitte geben Sie den Namen des Charakters und die zugehörige Serie/das Spiel an",
    able:"Aktiv",
    assetWidth: "Maximale Breite der Asset-Bilder",
    animationSpeed: "Animationsgeschwindigkeit",
    screenshot: "Screenshot",
    screenshotSaved: "Screenshot gespeichert",
    inputBotGenerationPrompt: "Anweisung für die Bot-Erzeugung",
    createBotAI: "OC-Bot mit KI erstellen",
    createBotwithAI: "Bot mit KI erstellen",
    changeFolderName: "Geben Sie den neuen Ordnernamen ein (leer lassen zum Abbrechen)",
    cancel: "Abbrechen",
    renameFolder: "Ordner umbenennen",
    changeFolderColor: "Ordnerfarbe ändern",
    fullWordMatching: "Vollständige Wortübereinstimmung",
    botSettingAtStart: "Bot-Menü beim Start anzeigen",
    triggerStart: "Beim Senden eines Chats",
    triggerInput: "Beim Ausgeben eines Benutzers",
    triggerOutput: "Beim Ausgeben eines Charakters",
    triggerManual: "Nur manuelle Auslösung",
    triggerCondVar: "Wenn Variable",
    triggerCondExists: "Wenn Text im Chat vorhanden ist",
    triggerScript: "Auslösungsskript",
    triggerMatchRegex: "Mit Regex übereinstimmen",
    triggerMatchLoose: "Locker übereinstimmen",
    triggerMatchStrict: "Streng übereinstimmen",
    searchDepth: "Suchtiefe",
    equal: "Gleich",
    notEqual: "Ungleich",
    greater: "Größer",
    less: "Kleiner",
    greaterEqual: "Größer oder gleich",
    lessEqual: "Kleiner oder gleich",
    triggerEffSysPrompt: 'Eine System-Anweisung hinzufügen',
    triggerEffSetVar: 'Variable ändern',
    triggerEffImperson: 'Chat senden',
    varableName: "Variablenname",
    role: "Rolle",
    location: 'Ort',
    promptstart: "Start der Anweisung",
    promptend: "Ende der Anweisung",
    historyend: "Ende der Historie",
    always: "Immer",
    noEffect: "Kein Effekt",
    invaildTriggerEffect: "Dieser Effekt funktioniert nicht für diesen Auslösungstyp",
    operator: "Operator",
    TriggerSetToVar: "Auf Variable setzen",
    TriggerAddToVar: "Zur Variable hinzufügen",
    TriggerSubToVar: "Von Variable subtrahieren",
    TriggerMulToVar: "Mit Variable multiplizieren",
    TriggerDivToVar: "Von Variable dividieren",
    isNull: "ist nicht festgelegt",
    ifChatIndex: "Wenn Chat-Index",
    ifRandom: "Wenn zufällig",
    hideRealm: "RisuRealm verstecken",
    popularityLevel: "{} Beliebtheit",
    colorScheme: "Farbschema",
    rangeStart: "Bereichsstart",
    rangeEnd: "Bereichsende",
    untilChatEnd: "Bis zum Chat-Ende",
    usePromptTemplate: "Verwenden einer Anweisungs-Vorlage",
    specialType: "Spezialtyp",
    noSpecialType: "Kein Spezialtyp",
    forceProxyAsOpenAI: "Proxy-Format als OpenAI erzwingen",
    promptTemplate: "Anweisungs-Vorlage",
    customInnerFormat: "Benutzerdefiniertes Inner-Format",
    innerFormat: "Inner-Format",
    HypaMemory: "HypaMemory",
    ToggleHypaMemory: "HypaMemory umschalten",
    resetAnweisungsTemplateConfirm: "Möchten Sie die Anweisungs-Vorlage wirklich zurücksetzen?",
    emotionMethod: "Emotionsmethode",
    continueResponse: "Antwort fortsetzen",
    showMenuChatList: "Menü-Chatliste anzeigen",
    translatorLanguage: "Übersetzer-Sprache",
    translatorType: "Übersetzer-Typ",
    deeplKey: "DeepL API-Schlüssel",
    deeplFreeKey: "DeepL Gratis API-Schlüssel",
    exportPersona: "Profil exportieren",
    importPersona: "Profil importieren",
    export: "Exportieren",
    import: "Importieren",
    supporterThanks: "Dankessagung",
    supporterThanksDesc: "Danke für Ihre Unterstützung!",
    donatorPatreonDesc:"Standardmäßig wird es nicht in der Liste angezeigt, um die Privatsphäre zu wahren. Wenn Sie Ihren Spitznamen anzeigen möchten, gehen Sie auf die RisuAI Patreon-Seite und klicken Sie auf den 'Link' Button",
    useNamePrefix: "Einen Präfix vor dem Namen verwenden",
    textAdventureNAI: "Als Textabenteuer ausführen",
    appendNameNAI: "Namen an NAI anhängen",
    customStopWords: "Benutzerdefinierte Stoppwörter",
}
