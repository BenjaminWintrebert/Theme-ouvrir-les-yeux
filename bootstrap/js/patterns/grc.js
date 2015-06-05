// Hyphenation patterns for Ancient Greek.
// Created by Dimitrios Filippou with some ideas borrowed from
// Yannis Haralambous, Kostis Dryllerakis and Claudio Beccari.
﻿// From http://tug.org/svn/texhyphen/branches/ptex/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-grc.tex
// Converted by Pablo Rodríguez (hyphenator at pragmata dot tk)
/*global Hyphenator*/
Hyphenator.languages['grc'] = {
    leftmin: 2,
    rightmin: 2,
    specialChars: "αεηιουωϊϋἀἁἂἃἄἅἆἇἐἑἒἓἔἕἠἡἢἣἤἥἦἧἰἱἲἳἴἵἶἷὀὁὂὃὄὅὐὑὒὓὔὕὖὗὠὡὢὣὤὥὦὧὰὲὴὶὸὺὼᾀᾁᾂᾃᾄᾅᾆᾇᾐᾑᾒᾓᾔᾕᾖᾗᾠᾡᾢᾣᾤᾥᾦᾧᾲᾳᾴᾶᾷῂῃῄῆῇῒῖῗῢῦῧῲῳῴῶῷάέήίόύώΐΰάέήίόύώΐΰβγδζθκλμνξπρσϲςτφχψ'ʼ᾿ῤῥ’᾽",
    patterns: {
        2: "α1ε1η1ι1ο1υ1ω1ϊ1ϋ1ἀ1ἁ1ἂ1ἃ1ἄ1ἅ1ἆ1ἇ1ἐ1ἑ1ἒ1ἓ1ἔ1ἕ1ἠ1ἡ1ἢ1ἣ1ἤ1ἥ1ἦ1ἧ1ἰ1ἱ1ἲ1ἳ1ἴ1ἵ1ἶ1ἷ1ὀ1ὁ1ὂ1ὃ1ὄ1ὅ1ὐ1ὑ1ὒ1ὓ1ὔ1ὕ1ὖ1ὗ1ὠ1ὡ1ὢ1ὣ1ὤ1ὥ1ὦ1ὧ1ὰ1ὲ1ὴ1ὶ1ὸ1ὺ1ὼ1ᾀ1ᾁ1ᾂ1ᾃ1ᾄ1ᾅ1ᾆ1ᾇ1ᾐ1ᾑ1ᾒ1ᾓ1ᾔ1ᾕ1ᾖ1ᾗ1ᾠ1ᾡ1ᾢ1ᾣ1ᾤ1ᾥ1ᾦ1ᾧ1ᾲ1ᾳ1ᾴ1ᾶ1ᾷ1ῂ1ῃ1ῄ1ῆ1ῇ1ῒ1ῖ1ῗ1ῢ1ῦ1ῧ1ῲ1ῳ1ῴ1ῶ1ῷ1ά1έ1ή1ί1ό1ύ1ώ1ΐ1ΰ1ά1έ1ή1ί1ό1ύ1ώ1ΐ1ΰ14'4ʼ4᾿",
        3: "α2ια2ία2ία2ὶα2ῖα2ἰα2ἴα2ἲα2ἶα2ἱα2ἵα2ἳα2ἷά3ιά3ιᾶ3ιἀ3ιἁ3ια2υα2ύα2ύα2ὺα2ῦα2ὐα2ὔα2ὒα2ὖα2ὑα2ὕα2ὓα2ὗά3υά3υᾶ3υἀ3υἁ3υε2ιε2ίε2ίε2ὶε2ῖε2ἰε2ἴε2ἲε2ἶε2ἱε2ἵε2ἳε2ἷέ3ιέ3ιἐ3ιἑ3ιε2υε2ύε2ύε2ὺε2ῦε2ὐε2ὔε2ὒε2ὖε2ὑε2ὕε2ὓε2ὗέ3υέ3υἑ3υἐ3υη2υη2ύη2ύη2ὺη2ῦη2ὐη2ὔη2ὒη2ὖη2ὑη2ὕη2ὓη2ὗή3υή3υῆ3υἠ3υἡ3υο2ιο2ίο2ίο2ὶο2ῖο2ἰο2ἴο2ἲο2ἶο2ἱο2ἵο2ἳο2ἷό3ιό3ιὀ3ιὁ3ιο2υο2ύο2ύο2ὺο2ῦο2ὐο2ὔο2ὒο2ὖο2ὑο2ὕο2ὓο2ὗό3υό3υὀ3υὁ3υυ2ιυ2ίυ2ίυ2ὶυ2ῖυ2ἰυ2ἴυ2ἲυ2ἶυ2ἱυ2ἵυ2ἳυ2ἷύ3ιύ3ιῦ3ιὐ3ιὑ3ι4β_4γ_4δ_4ζ_4θ_4κ_4λ_4μ_4ν_4ξ_4π_4ρ_4σ_4ϲ_4ς_4τ_4φ_4χ_4ψ_4β'4βʼ4β᾿4γ'4γʼ4γ᾿4δ'4δʼ4δ᾿4ζ'4ζʼ4ζ᾿4θ'4θʼ4θ᾿4κ'4κʼ4κ᾿4λ'4λʼ4λ᾿4μ'4μʼ4μ᾿4ν'4νʼ4ν᾿4ξ'4ξʼ4ξ᾿4π'4πʼ4π᾿4ρ'4ρʼ4ρ᾿4σ'4σʼ4σ᾿4ϲ'4ϲʼ4ϲ᾿4τ'4τʼ4τ᾿4φ'4φʼ4φ᾿4χ'4χʼ4χ᾿4ψ'4ψʼ4ψ᾿_β4_γ4_δ4_ζ4_θ4_κ4_λ4_μ4_ν4_ξ4_π4_ρ4_σ4_ϲ4_τ4_φ4_χ4_ψ4",
        4: "ου3ιόυ4ιόυ4ιὀυ4ιὁυ4ιο3υίο3υίο3υῖ2β1β2γ1γ2δ1δ2ζ1ζ2θ1θ2κ1κ2λ1λ2μ1μ2ν1ν2π1π2ρ1ρ2ῤ1ῥ2σ1σ2ϲ1ϲ2τ1τ2φ1φ2χ1χ2ψ1ψ2β1γ2β1ζ2β1θ2β1κ2β1ξ2β1π2β1σ2β1ϲ2β1τ2β1φ2β1χ2β1ψ2γ1β2γ1ζ2γ1θ2γ1κ2γ1ξ2γ1π2γ1σ2γ1ϲ2γ1τ2γ1φ2γ1χ2γ1ψ2δ1β2δ1γ2δ1ζ2δ1θ2δ1κ2δ1λ2δ1ξ2δ1π2δ1σ2δ1ϲ2δ1τ2δ1φ2δ1χ2δ1ψ2ζ1β2ζ1γ2ζ1δ2ζ1θ2ζ1κ2ζ1λ2ζ1μ2ζ1ν2ζ1ξ2ζ1π2ζ1ρ2ζ1σ2ζ1ϲ2ζ1τ2ζ1φ2ζ1χ2ζ1ψ2θ1β2θ1γ2θ1δ2θ1ζ2θ1κ2θ1ξ2θ1π2θ1σ2θ1ϲ2θ1τ2θ1φ2θ1χ2θ1ψ2κ1β2κ1γ2κ1δ2κ1ζ2κ1θ2κ1ξ2κ1π2κ1σ2κ1ϲ2κ1φ2κ1χ2κ1ψ2λ1β2λ1γ2λ1δ2λ1ζ2λ1θ2λ1κ2λ1μ2λ1ν2λ1ξ2λ1π2λ1ρ2λ1σ2λ1ϲ2λ1τ2λ1φ2λ1χ2λ1ψ2μ1β2μ1γ2μ1δ2μ1ζ2μ1θ2μ1κ2μ1λ2μ1ξ2μ1π2μ1ρ2μ1σ2μ1ϲ2μ1τ2μ1φ2μ1χ2μ1ψ2ν1β2ν1γ2ν1δ2ν1ζ2ν1θ2ν1κ2ν1λ2ν1μ2ν1ξ2ν1π2ν1ρ2ν1σ2ν1ϲ2νς_2νϲ_2ν1τ2ν1φ2ν1χ2ν1ψ2ξ1β2ξ1γ2ξ1δ2ξ1ζ2ξ1θ2ξ1κ2ξ1λ2ξ1μ2ξ1ν2ξ1π2ξ1ρ2ξ1σ2ξ1ϲ2ξ1τ2ξ1φ2ξ1χ2ξ1ψ2π1β2π1γ2π1δ2π1ζ2π1θ2π1κ2π1ξ2π1σ2π1ϲ2π1φ2π1χ2π1ψ2ρ1β2ρ1γ2ρ1δ2ρ1ζ2ρ1θ2ρ1κ2ρ1λ2ρ1μ2ρ1ν2ρ1ξ2ρ1π2ρ1σ2ρ1ϲ2ρ1τ2ρ1φ2ρ1χ2ρ1ψ2σ1δ2ϲ1δ2σ1ζ2ϲ1ζ2σ1λ2ϲ1λ2σ1ν2ϲ1ν2σ1ξ2ϲ1ξ2σ1ρ2ϲ1ρ2σ1ψ2ϲ1ψ2τ1β2τ1γ2τ1δ2τ1ζ2τ1θ2τ1κ2τ1ξ2τ1π2τ1σ2τ1ϲ2τ1φ2τ1χ2τ1ψ2φ1β2φ1γ2φ1δ2φ1ζ2φ1κ2φ1ξ2φ1π2φ1σ2φ1ϲ2φ1τ2φ1χ2φ1ψ2χ1β2χ1γ2χ1δ2χ1ζ2χ1κ2χ1ξ2χ1π2χ1σ2χ1ϲ2χ1τ2χ1φ2χ1ψ2ψ1β2ψ1γ2ψ1δ2ψ1ζ2ψ1θ2ψ1κ2ψ1λ2ψ1μ2ψ1ν2ψ1ξ2ψ1π2ψ1ρ2ψ1σ2ψ1ϲ2ψ1τ2ψ1φ2ψ1χ4βδ'4βδ’4βδʼ4βδ᾽4βδ᾿4βλ'4βλ’4βλʼ4βλ᾽4βλ᾿4βμ'4βμ’4βμʼ4βμ᾽4βμ᾿4βν'4βν’4βνʼ4βν᾽4βν᾿4βρ'4βρ’4βρʼ4βρ᾽4βρ᾿4γδ'4γδ’4γδʼ4γδ᾽4γδ᾿4γλ'4γλ’4γλʼ4γλ᾽4γλ᾿4γμ'4γμ’4γμʼ4γμ᾽4γμ᾿4γν'4γν’4γνʼ4γν᾽4γν᾿4γρ'4γρ’4γρʼ4γρ᾽4γρ᾿4δμ'4δμ’4δμʼ4δμ᾽4δμ᾿4δν'4δν’4δνʼ4δν᾽4δν᾿4δρ'4δρ’4δρʼ4δρ᾽4δρ᾿4ζβ'4ζβ’4ζβʼ4ζβ᾽4ζβ᾿4θλ'4θλ’4θλʼ4θλ᾽4θλ᾿4λμ'4λμ’4λμʼ4λμ᾽4λμ᾿4θν'4θν’4θνʼ4θν᾽4θν᾿4θρ'4θρ’4θρʼ4θρ᾽4θρ᾿4κλ'4κλ’4κλʼ4κλ᾽4κλ᾿4κμ'4κμ’4κμʼ4κμ᾽4κμ᾿4κν'4κν’4κνʼ4κν᾽4κν᾿4κρ'4κρ’4κρʼ4κρ᾽4κρ᾿4κτ'4κτ’4κτʼ4κτ᾽4κτ᾿4μν'4μν’4μνʼ4μν᾽4μν᾿4πλ'4πλ’4πλʼ4πλ᾽4πλ᾿4πμ'4πμ’4πμʼ4πμ᾽4πμ᾿4πν'4πν’4πνʼ4πν᾽4πν᾿4πρ'4πρ’4πρʼ4πρ᾽4πρ᾿4πτ'4πτ’4πτʼ4πτ᾽4πτ᾿4σβ'4σβ’4σβʼ4σβ᾽4σβ᾿4ϲβ'4ϲβ’4ϲβʼ4ϲβ᾽4ϲβ᾿4σγ'4σγ’4σγʼ4σγ᾽4σγ᾿4ϲγ'4ϲγ’4ϲγʼ4ϲγ᾽4ϲγ᾿4σδ'4σδ’4σδʼ4σδ᾽4σδ᾿4ϲδ'4ϲδ’4ϲδʼ4ϲδ᾽4ϲδ᾿4σθ'4σθ’4σθʼ4σθ᾽4σθ᾿4ϲθ'4ϲθ’4ϲθʼ4ϲθ᾽4ϲθ᾿4σκ'4σκ’4σκʼ4σκ᾽4σκ᾿4ϲκ'4ϲκ’4ϲκʼ4ϲκ᾽4ϲκ᾿4σμ'4σμ’4σμʼ4σμ᾽4σμ᾿4ϲμ'4ϲμ’4ϲμʼ4ϲμ᾽4ϲμ᾿4σπ'4σπ’4σπʼ4σπ᾽4σπ᾿4ϲπ'4ϲπ’4ϲπʼ4ϲπ᾽4ϲπ᾿4στ'4στ’4στʼ4στ᾽4στ᾿4ϲτ'4ϲτ’4ϲτʼ4ϲτ᾽4ϲτ᾿4σφ'4σφ’4σφʼ4σφ᾽4σφ᾿4ϲφ'4ϲφ’4ϲφʼ4ϲφ᾽4ϲφ᾿4σχ'4σχ’4σχʼ4σχ᾽4σχ᾿4ϲχ'4ϲχ’4ϲχʼ4ϲχ᾽4ϲχ᾿4φθ'4φθ’4φθʼ4φθ᾽4φθ᾿4φλ'4φλ’4φλʼ4φλ᾽4φλ᾿4φμ'4φμ’4φμʼ4φμ᾽4φμ᾿4φν'4φν’4φνʼ4φν᾽4φν᾿4φρ'4φρ’4φρʼ4φρ᾽4φρ᾿4χθ'4χθ’4χθʼ4χθ᾽4χθ᾿4χλ'4χλ’4χλʼ4χλ᾽4χλ᾿4χμ'4χμ’4χμʼ4χμ᾽4χμ᾿4χν'4χν’4χνʼ4χν᾽4χν᾿4χρ'4χρ’4χρʼ4χρ᾽4χρ᾿ἐ2ν1ἔ2ν1ἐ2ξ1ἔ2ξ1ἐ2σ1ἐ2ϲ1",
        5: "ἀ2ν1ύἀ2ν1ύἀ2ν1υεἰ2σ1εἰ2ϲ1εἴ2σ1εἴ2ϲ1ἐ2κ1λἐ2κ1μἔ2κ1μἐ2κ1νἔ2κ1νἐ2κ1ρἔ2κ1ρἐ3νηέἐ3νηέἐ3ν2ίἐ3ν2ίἐ3ν2ιἔ3ν2ιἔ3ν2ωἐ3σ2θἐ3ϲ2θἐ3σ2κἐ3ϲ2κἐ3σ2τἐ3ϲ2τἐ3σ2υἐ3ϲ2υἐ3σ2ύἐ3σ2ύἐ3ϲ2ύἐ3ϲ2ύἐ3σ2χἐ3ϲ2χἐ3σ2ώἐ3σ2ώἐ3ϲ2ώἐ3ϲ2ώἐ3σ2ωἐ3ϲ2ω",
        6: "ἁλό2σ1ἁλό2σ1ἁλό2ϲ1ἁλό2ϲ1ἁλο2σ1ἁλο2ϲ1ἀ2ν1άρἀ2ν1άρἀ2ν1αρἄ2ν1αρἀ2ν1έκἀ2ν1έκἀ2ν1εκἀ2ν1ένἀ2ν1ένἀ2ν1ενἀ2ν1επἀ2ν1έφἀ2ν1έφἀ2ν1εφἀ2ν1ήδἀ2ν1ήδἀ2ν1ηδἀ2ν1ήμἀ2ν1ήμἀ2ν1ημἀ2ν1ίκἀ2ν1ίκἀ2ν1ικἄ2ν1ικἀ2ν1ίλἀ2ν1ίλἀ2ν1ιλἀ2ν1ισἀ2ν1ιϲἄ2ν1ισἄ2ν1ιϲἀ2ν1ίσἀ2ν1ίσἀ2ν1ίϲἀ2ν1ίϲἄ2ν1ιχἀ2ν1ίχἀ2ν1ίχἀ2ν1ίψἀ2ν1ίψἀ2ν1ιψἄ2ν1οζἀ2ν1όζἀ2ν1όζἀ2ν1όλἀ2ν1όλἀ2ν1ολἄ2ν1ολἀ2ν1όνἀ2ν1όνἀ2ν1ονἄ2ν1οπἀ2ν1όπἀ2ν1όπἀ2ν1όρἀ2ν1όρἀ2ν1ορἄ2ν1ορἀ2ν1οψἄ2ν1οψἀ2ν1όψἀ2ν1όψἀ3ν2υμἀ3ν2ύσἀ3ν2ύσἀ3ν2ύϲἀ3ν2ύϲἀ3ν2υσἀ3ν2υϲἄ2ν1ῳδἀ2ν1ῴδἀ2ν1ώιἀ2ν1ώιἀ2ν1ωίἀ2ν1ωίἀ2ν1ώλἀ2ν1ώλἀ2ν1ωλἀ2ν1ώμἀ2ν1ώμἀ2ν1ωμἀ2ν1ώνἀ2ν1ώνἀ2ν1ωνἀ2ν1ωρἄ2ν1ωρἀ2ν1ώρἀ2ν1ώρἁπα2ξ1ἁπε2ρ1ἀσύ2ν1ἀσύ2ν1ἀϲύ2ν1ἀϲύ2ν1ἀσυ2ν1ἀϲυ2ν1ἀξύ2ν1ἀξύ2ν1ἀξυ2ν1ἀω2σ1φἀω2ϲ1φ_δύ2σ1_δύ2σ1_δύ2ϲ1_δύ2ϲ1_δυ2σ1_δυ2ϲ1δύ3σ2ῃδύ3σ2ῃδύ3ϲ2ῃδύ3ϲ2ῃεἴσει_εἴϲει_εἴ3σ2ωεἴ3ϲ2ωἐ3κ2λῄἐ3κ2λύἐ3κ2λύἐ3κ2νυἐ2κ1τεἐ2κ1τέἐ2κ1τέἐ2κ1τιἔ2κ1τιἐ2κ1τίἐ2κ1τίἐ2κ1τόἐ2κ1τόἐ2κ1τοἔ2κ1τοἐ2κ1τρἐ2κ1τυἔ3ν2ατἐ3ν2άτἐ3ν2άτἐ3ν2εόἐ3ν2εόἐ3ν2εὸἐ3ν2εοἐ3ν2εῶἐ3ν2εάἐ3ν2εάἐ3ν2εὰἐ3ν2εᾶἔ3ν2ησἔ3ν2ηϲἐ3ν2ήσἐ3ν2ήσἐ3ν2ήϲἐ3ν2ήϲἐ3ν2ηήἐ3ν2ηήἐ3ν2ηὴἐ3ν2ηοἐ3ν2ηῶἐ4ν3ίζἐ4ν3ίζἐ4ν3ίηἐ4ν3ίηἐ4ν3ίψἐ4ν3ίψἔ3ν2ῃ_ἔ3ν2η_ἔ3ν2υξἐ3ν2υξἐ3ν2ύξἐ3ν2ύξἐ3ν2ύσἐ3ν2ύσἐ3ν2ύϲἐ3ν2ύϲἐ3ν2υσἐ3ν2υϲἐ3ν2υώἐ3ν2υώἐ3ν2υὼἐ3ξ2ήρἐ3ξ2ήρἐ3ξ2ηρἐ3ξ2υρἐ3ξ2ύρἐ3ξ2ύρἔ3ξ2υσἔ3ξ2υϲἔ3ξ2ω_ἐπε2ξ1ἐ3σ2άωἐ3σ2άωἐ3ϲ2άωἐ3ϲ2άωἐ3σ2ημἐ3ϲ2ημἐ3σ2ιγἐ3ϲ2ιγἐ4σ3κάἐ4σ3κάἐ4ϲ3κάἐ4ϲ3κάἐ4σ3καἐ4ϲ3καἐ3σ2όμἐ3σ2όμἐ3ϲ2όμἐ3ϲ2όμἐ3σ2ομἐ3ϲ2ομἐ3σ2οῦἐ3ϲ2οῦἐ3σ2ούἐ3σ2ούἐ3ϲ2ούἐ3ϲ2ούἐ3σ2ουἐ3ϲ2ουἐσύ2ν1ἐσύ2ν1ἐϲύ2ν1ἐϲύ2ν1ἐσυ2ν1ἐϲυ2ν1ἐ4σ3χέἐ4σ3χέἐ4ϲ3χέἐ4ϲ3χέἔ2σ1οπἔ2ϲ1οπεὐε2ξ1ἐω2σ1φἐω2ϲ1φἤ2ν1οπἠ2ν1όπἠ2ν1όποἱό2σ1οἱό2σ1οἱό2ϲ1οἱό2ϲ1ὁπω2σ1ὁπω2ϲ1_πα2ν1_πά2ν1_πά2ν1_πάνα__πάνα__συ2ν1_ϲυ2ν1_σύ2ν1_σύ2ν1_ϲύ2ν1_ϲύ2ν1ὑο2σ1κὑο2ϲ1κὑπε2ν1ὑπε2ξ1ὑπε2ρ1ὑπέ2ρ1ὑπέ2ρ1ὕ2σ1τρὕ2ϲ1τρὑ2σ1τρὑ2ϲ1τρὥ2σ1τεὥ2ϲ1τε",
        7: "ἀδιέ2ξ1ἀδιέ2ξ1ἀδιε2ξ1ἀδυ2σ1ώἀδυ2σ1ώἀδυ2ϲ1ώἀδυ2ϲ1ώἀδυ2σ1ωἀδυ2ϲ1ωἀ2ν1αγοἀ2ν1αγῆἄ2ν1αγνἀ2ν1άγνἀ2ν1άγνἀ2ν1αγνἄ2ν1αθλἀ2ν1άθλἀ2ν1άθλἀ2ν1αίδἀ2ν1αίδἀ2ν1αιδἄ2ν1αιμἀ2ν1αίμἀ2ν1αίμἀ2ν1αιμἀ2ν1αίτἀ2ν1αίτἀ2ν1αιτἀ2ν1αλγἀ2ν1αλδἀ2ν1άλθἀ2ν1άλθἀ2ν1αλθἀ2ν1αλκἄ2ν1αλκἀ2ν1άλκἀ2ν1άλκἀ2ν1άλλἀ2ν1άλλἀ2ν1αλλἄ2ν1αλμἀ2ν1άλμἀ2ν1άλμἀ2ν1αλμἄ2ν1αλοἄ2ν1αλτἀ2ν1άλτἀ2ν1άλτἀ2ν1αμπἀ2ν1άμπἀ2ν1άμπἀ2ν1αμφἄ2ν1ανδἀ2ν1άνδἀ2ν1άνδἀ2ν1ανθἀ2ν1αράἀ2ν1αράἀ2ν1αραἀ3ν2αρπἀ3ν2άρρἀ3ν2άρρἀ3ν2αρρἀ3ν2αρτἀ2ν1άτωἀ2ν1άτωἄ2ν1ατεἀ2ν1άττἀ2ν1άττἀ2ν1αττἀ2ν1αύγἀ2ν1αύγἀ2ν1αυγἀ2ν1αύδἀ2ν1αύδἀ2ν1αυδἄ2ν1αυδἄ2ν1αυλἀ2ν1αύλἀ2ν1αύλἀ2ν1αύξἀ2ν1αύξἀ2ν1αυξἀ2ν1αύχἀ2ν1αύχἀ2ν1αυχἀ2ν1αφήἀ2ν1αφήἀ2ν1αφὴἀ2ν1αφῆἀ2ν1αφέἀ2ν1αφέἀ2ν1αφὲἄ2ν1αφρἀ2ν1άφρἀ2ν1άφρἀ2ν1έγγἀ2ν1έγγἀ2ν1εγγἀ2ν1εγκἀ2ν1έγκἀ2ν1έγκἀ2ν1εγχἀ2ν1εδάἀ2ν1εδάἀ2ν1εδαἀ2ν1εέρἀ2ν1εέρἀ2ν1εερἀ2ν1έθιἀ2ν1έθιἀ2ν1εθίἀ2ν1εθίἀ3ν2έκαἀ3ν2έκαἀ3ν2εκτἀ2ν1έλλἀ2ν1έλλἀ2ν1έμβἀ2ν1έμβἀ2ν1εμβἀ2ν1έμπἀ2ν1έμπἀ2ν1εμπἀ2ν1έμφἀ2ν1έμφἀ2ν1εμφἀ3ν2ενήἀ3ν2ενήἀ2ν1έορἀ2ν1έορἀ2ν1εόρἀ2ν1εόρἀ3ν2επνἀ3ν2επτἀ2ν1εργἄ2ν1εργἀ2ν1έργἀ2ν1έργἀ2ν1ερίἀ2ν1ερίἀ2ν1εριἀ2ν1ετυἀ2ν1έτυἀ2ν1έτυἀ2ν1ετύἀ2ν1ετύἀ2ν1εύθἀ2ν1εύθἀ2ν1ευθἄ2ν1ευκἀ2ν1εύκἀ2ν1εύκἀ2ν1ευλἀ2ν1εύχἀ2ν1εύχἀ2ν1ευχἀ2ν1εύξἀ2ν1εύξἀ2ν1ευξἀ2ν1ηυξἀ2ν1ηῦγἀ2ν1ηυγἀ2ν1εχέἀ2ν1εχέἀ2ν1εχεἀ2ν1έψαἀ2ν1έψαἀ2ν1εψάἀ2ν1εψάἀ2ν1ήκοἀ2ν1ήκοἀ2ν1ηκόἀ2ν1ηκόἀ2ν1ηκοἀ2ν1ηλήἀ2ν1ηλήἀ2ν1ηλὴἀ2ν1ηλῆἀ2ν1ηλέἀ2ν1ηλέἀ2ν1ηλὲἀ2ν1ηλῶἀ2ν1ήνυἀ2ν1ήνυἀ2ν1ηνύἀ2ν1ηνύἀ2ν1ήριἀ2ν1ήριἀ2ν1ηρίἀ2ν1ηρίἀ2ν1ήσσἀ2ν1ήσσἀ2ν1ήϲϲἀ2ν1ήϲϲἀ2ν1ησσἀ2ν1ηϲϲἀ2ν1ήττἀ2ν1ήττἀ2ν1ηττἀ2ν1ήφαἀ2ν1ήφαἀ2ν1ηφαἀ2ν1ίατἀ2ν1ίατἀ2ν1ιάτἀ2ν1ιάτἀ2ν1ίερἀ2ν1ίερἀ2ν1ιέρἀ2ν1ιέρἀ3ν2ίκηἀ3ν2ίκηἀ3ν2ικήἀ3ν2ικήἀ2ν1ίουἀ2ν1ίουἀ2ν1ιούἀ2ν1ιούἄ2ν1ιππἀ2ν1ίππἀ2ν1ίππἀ3ν2ίστἀ3ν2ίστἀ3ν2ίϲτἀ3ν2ίϲτἀ3ν2ιστἀ3ν2ιϲτἀ3ν2ίσχἀ3ν2ίσχἀ3ν2ίϲχἀ3ν2ίϲχἀ2ν1όδεἀ2ν1όδεἀ2ν1οδέἀ2ν1οδέἄ2ν1οικἀ2ν1οίκἀ2ν1οίκἀ2ν1οινἄ2ν1οινἀ2ν1οίνἀ2ν1οίνἀ3ν2ολκἀ3ν2ολοἀ2ν1όμοἀ2ν1όμοἀ2ν1ομόἀ2ν1ομόἀ2ν1ομοἄ3ν2ορθἀ3ν2όρθἀ3ν2όρθἀ3ν2ορτἀ3ν2ορύἀ3ν2ορύἀ2ν1όσιἀ2ν1όσιἀ2ν1όϲιἀ2ν1όϲιἀ2ν1οσίἀ2ν1οσίἀ2ν1οϲίἀ2ν1οϲίἀ2ν1οσιἀ2ν1οϲιἄ2ν1οσμἄ2ν1οϲμἀ2ν1όσμἀ2ν1όσμἀ2ν1όϲμἀ2ν1όϲμἀ2ν1ούαἀ2ν1ούαἀ2ν1ουάἀ2ν1ουάἀ2ν1ούτἀ2ν1ούτἀ2ν1ουτἀ2ν1οφθἄ2ν1οχλἀ2ν1όχλἀ2ν1όχλἀντε2κ1ἀντε2ν1ἀντε2ξ1ἀ2ν1ώδυἀ2ν1ώδυἀ2ν1ωδύἀ2ν1ωδύἄ2ν1ωτοἀ2ν1ώτοἀ2ν1ώτοἀ2ν1ώχυἀ2ν1ώχυἀ2ν1ωχύἀ2ν1ωχύἀπε2κ1λἀπρό2σ1ἀπρό2σ1ἀπρό2ϲ1ἀπρό2ϲ1ἀπρο2σ1ἀπρο2ϲ1ἁρπα2ξ1αὐτε2ξ1_δα2σ1π_δα2ϲ1π_διέ2ξ1_διέ2ξ1_διε2ξ1_δί2σ1α_δί2σ1α_δί2ϲ1α_δί2ϲ1α_δι2σ1ά_δι2σ1ά_δι2ϲ1ά_δι2ϲ1ά_δί2σ1η_δί2σ1η_δί2ϲ1η_δί2ϲ1η_δι2σ1ή_δι2σ1ή_δι2ϲ1ή_δι2ϲ1ή_δί2σ1ε_δί2σ1ε_δί2ϲ1ε_δί2ϲ1ε_δι2σ1ε_δι2ϲ1ε_δι2σ1θ_δι2ϲ1θδύ3σ2ω_δύ3σ2ω_δύ3ϲ2ω_δύ3ϲ2ω_δύ3σ2ονδύ3σ2ονδύ3ϲ2ονδύ3ϲ2ονδυ3σ2όνδυ3σ2όνδυ3ϲ2όνδυ3ϲ2όνδύ3σ2ασδύ3σ2ασδύ3ϲ2αϲδύ3ϲ2αϲδυ3σ2άσδυ3σ2άσδυ3ϲ2άϲδυ3ϲ2άϲδύ3σ2εωδύ3σ2εωδύ3ϲ2εωδύ3ϲ2εωδύ3σ2ι_δύ3σ2ι_δύ3ϲ2ι_δύ3ϲ2ι_ἐδυ2σ1τἐδυ2ϲ1τεἰ2ν1όδεἰ2ν1όδεἰ2ν1οδεἰ3σ2ί_εἰ3σ2ί_εἰ3ϲ2ί_εἰ3ϲ2ί_εἰ3σ2ὶ_εἰ3ϲ2ὶ_εἰ3σ2ι_εἰ3ϲ2ι_εἴ3σ2ομεἴ3ϲ2ομεἴ3σ2ῃ_εἴ3ϲ2ῃ_εἰ3σ2όμεἰ3σ2όμεἰ3ϲ2όμεἰ3ϲ2όμἐ3κ2λάζἐ3κ2λάζἐ3κ2λάγἐ3κ2λάγἐ3κ2λάοἐ3κ2λάοἐ3κ2λάσἐ3κ2λάσἐ3κ2λάϲἐ3κ2λάϲἐ3κ2λαίἐ3κ2λαίἐ3κ2λαύἐ3κ2λαύἐ3κ2λείἐ3κ2λείἐ3κ2λάπἐ3κ2λάπἐ3κ2λαπἐ3κ2λέφἐ3κ2λέφἐ3κ2λεφἐ3κ2λήρἐ3κ2λήρἐ3κ2ληρἐ3κ2λίνἐ3κ2λίνἐ3κ2λινἐ3κ2λόμἐ3κ2λόμἔ2κ1λειἔ2κ1λυσἔ2κ1λυϲἔ3κ2ναιἐ3κ2ναίἐ3κ2ναίἔ3κ2νησἔ3κ2νηϲἐ3κ2νήσἐ3κ2νήσἐ3κ2νήϲἐ3κ2νήϲἐ3κ2ράδἐ3κ2ράδἐ3κ2ραδἔ3κ2ραζἐ3κ2ράζἐ3κ2ράζἔ3κ2ραγἐ3κ2ράγἐ3κ2ράγἐ3κ2ράτἐ3κ2ράτἐ3κ2ρατἔ3κ2ραιἐ3κ2ραίἐ3κ2ραίἔ3κ2ρανἐ3κ2ράνἐ3κ2ράνἐ3κ2ρήηἐ3κ2ρήηἐ3κ2ράαἐ3κ2ράαἐ3κ2ραάἐ3κ2ραάἐ3κ2ράθἐ3κ2ράθἐ3κ2ραθἔ3κ2ρεκἐ3κ2ρέκἐ3κ2ρέκἔ3κ2ρεξἐ3κ2ρέξἐ3κ2ρέξἐ3κ2ρέμἐ3κ2ρέμἐ3κ2ρεμἐ3κ2ρήμἐ3κ2ρήμἐ3κ2ρημἔ3κ2ρινἐ3κ2ρίνἐ3κ2ρίνἐ3κ2ρίθἐ3κ2ρίθἐ3κ2ρότἐ3κ2ρότἐ3κ2ροτἔ3κ2ρουἐ3κ2ρούἐ3κ2ρούἔ3κ2ρυπἐ3κ2ρύπἐ3κ2ρύπἔ3κ2ρυψἐ3κ2ρύψἐ3κ2ρύψἐ3κ2ρύβἐ3κ2ρύβἐ3κ2ρύφἐ3κ2ρύφἐ3κ2ρυσἐ3κ2ρυϲἔ3κ2ρωζἐ3κ2ρώζἐ3κ2ρώζἔ3κ2ρωξἐ3κ2ρώξἐ3κ2ρώξἐ2κ1ταθἐ2κ1τανἐ2κ1ταρἐ2κ1τάσἐ2κ1τάσἐ2κ1τάϲἐ2κ1τάϲἐ2κ1τήκἐ2κ1τήκἔ3κ2τιζἐ3κ2τίζἐ3κ2τίζἔ3ν2ασσἔ3ν2αϲϲἐ3ν2άσσἐ3ν2άσσἐ3ν2άϲϲἐ3ν2άϲϲἐ3ν2άσθἐ3ν2άσθἐ3ν2άϲθἐ3ν2άϲθἐ3ν2ασθἐ3ν2αϲθἐ3ν2έγκἐ3ν2έγκἐ3ν2εγκἔ3ν2εικἐ3ν2εῖκἐ3ν2εικἐ3ν2είκἐ3ν2είκἔ3ν2ειμἐ3ν2είμἐ3ν2είμἐ3ν2ενήἐ3ν2ενήἔ3ν2ευσἔ3ν2ευϲἐ3ν2εύσἐ3ν2εύσἐ3ν2εύϲἐ3ν2εύϲἐ3ν2έχθἐ3ν2έχθἐ3ν2εχθἔ3ν2ην_ἐ3ν2ηείἐ3ν2ηείἐ3ν2ήνοἐ3ν2ήνοἐ4ν3ιαύἐ4ν3ιαύἐ4ν3ιδρἐ4ν3ίδρἐ4ν3ίδρἐ4ν3ίω_ἐ4ν3ίω_ἐ4ν3ιππἐ4ν3ίππἐ4ν3ίππἐ4ν3ίπτἐ4ν3ίπτἐ4ν3ίσσἐ4ν3ίσσἐ4ν3ίϲϲἐ4ν3ίϲϲἐ4ν3ίστἐ4ν3ίστἐ4ν3ίϲτἐ4ν3ίϲτἐ4ν3ιστἐ4ν3ιϲτἐ4ν3ισχἐ4ν3ιϲχἐ4ν3ίσχἐ4ν3ίσχἐ4ν3ίϲχἐ4ν3ίϲχἔ3ν2ος_ἔ3ν2οϲ_ἔ3ν2οσ_ἔ3ν2ου_ἔ3ν2ον_ἔ3ν2οι_ἔ3ν2ης_ἔ3ν2ηϲ_ἔ3ν2ησ_ἔ3ν2οσιἔ3ν2οϲιἐ3ν2όσεἐ3ν2όσεἐ3ν2όϲεἐ3ν2όϲεἐ3ν2υάλἐ3ν2υάλἐ3ν2υαλἐ3ν2υόοἐ3ν2υόοἐπεί2σ1ἐπεί2σ1ἐπεί2ϲ1ἐπεί2ϲ1ἐπει2σ1ἐπει2ϲ1ἐπε2σ1βἐπε2ϲ1βἐ4σ3θέσἐ4σ3θέσἐ4ϲ3θέϲἐ4ϲ3θέϲεὐε3ξ2ίεὐε3ξ2ίεὐε3ξ2ιεὐσύ2ν1εὐσύ2ν1εὐϲύ2ν1εὐϲύ2ν1εὐσυ2ν1εὐϲυ2ν1εὐξύ2ν1εὐξύ2ν1εὐξυ2ν1ἤ2ν1οψ__μυ2σ1π_μυ2ϲ1π_ξυ2ν1ε_ξυ2ν1έ_ξυ2ν1έ_ξύ2ν1ε_ξύ2ν1ε_ξύ2ν1ι_ξύ2ν1ι_ξυ2ν1ί_ξυ2ν1ίὅ2σ1γε_ὅ2ϲ1γε_ὅ2σ1τιςὅ2ϲ1τιϲ_προ2σ1_προ2ϲ1_τρι2σ1_τρι2ϲ1ὑπεί2σ1ὑπεί2σ1ὑπεί2ϲ1ὑπεί2ϲ1ὑπει2σ1ὑπει2ϲ1ὑπε2κ1τὑπε3ρ2ῶὑπε3ρ2ώὑπε3ρ2ώὑπε3ρ2ω_φω2σ1φ_φω2ϲ1φὡ2σ1εί_ὡ2σ1εί_ὡ2ϲ1εί_ὡ2ϲ1εί_ὡ2σ1εὶ_ὡ2ϲ1εὶ_",
        8: "ἀγω2ν1άρἀγω2ν1άρἀγω2ν1αρἀμφί2σ1βἀμφί2σ1βἀμφί2ϲ1βἀμφί2ϲ1βἀμφι2σ1βἀμφι2ϲ1βἀμφί2σ1ωἀμφί2σ1ωἀμφί2ϲ1ωἀμφί2ϲ1ωἀμφι2σ1ώἀμφι2σ1ώἀμφι2ϲ1ώἀμφι2ϲ1ώἀ2ν1αγῆ_ἀ2ν1άγκυἀ2ν1άγκυἀ2ν1αγκύἀ2ν1αγκύἀ3ν2αγνάἀ3ν2αγνάἀ3ν2αγνωἀ3ν2άγνωἀ3ν2άγνωἀ3ν2αγνώἀ3ν2αγνώἀ2ν1αγρίἀ2ν1αγρίἀ2ν1αγρῖἀ2ν1αγριἀ2ν1άγωγἀ2ν1άγωγἀ2ν1αγώγἀ2ν1αγώγἀ2ν1άδελἀ2ν1άδελἀ2ν1αδέλἀ2ν1αδέλἀ2ν1άελπἀ2ν1άελπἀ2ν1αέλπἀ2ν1αέλπἀ2ν1αίσθἀ2ν1αίσθἀ2ν1αίϲθἀ2ν1αίϲθἀ2ν1αισθἀ2ν1αιϲθἀ2ν1αισιἀ2ν1αιϲιἀ2ν1αισίἀ2ν1αισίἀ2ν1αιϲίἀ2ν1αιϲίἀ2ν1αίσχἀ2ν1αίσχἀ2ν1αίϲχἀ2ν1αίϲχἀ2ν1αισχἀ2ν1αιϲχἀ2ν1άκανἀ2ν1άκανἀ2ν1ακάνἀ2ν1ακάνἀ3ν2αλδαἀ2ν1αλήθἀ2ν1αλήθἀ2ν1αληθἀ2ν1άλιπἀ2ν1άλιπἀ2ν1αλίπἀ2ν1αλίπἀ3ν2άλλοἀ3ν2άλλοἀ3ν2άλλεἀ3ν2άλλεἀ2ν1άλουἀ2ν1άλουἀ2ν1άλῳ_ἀ2ν1άλῳ_ἄ2ν1αλε_ἀ2ν1άλοιἀ2ν1άλοιἀ2ν1αμάξἀ2ν1αμάξἀ2ν1αμαξἀ3ν2ανθέἀ3ν2ανθέἀ2ν1άνιοἀ2ν1άνιοἀ2ν1ανίοἀ2ν1ανίοἀ2ν1ανίωἀ2ν1ανίωἀ2ν1αντίἀ2ν1αντίἀ2ν1αντιἀνα2ξ1αγἀνά2ξ1ανἀνά2ξ1ανἀνα2ξ1άνἀνα2ξ1άνἀνα2ξ1ανἀνά2ξ1αρἀνά2ξ1αρἀνα2ξ1άρἀνα2ξ1άρἀνά2ξ1ιπἀνά2ξ1ιπἀνα2ξ1ίπἀνα2ξ1ίπἀ2ν1άξιοἀ2ν1άξιοἀ2ν1αξίοἀ2ν1αξίοἀ2ν1αξίωἀ2ν1αξίωἀ2ν1αξίαἀ2ν1αξίαἀ2ν1αξῖαἀ2ν1απόβἀ2ν1απόβἀ2ν1αποβἀ2ν1απόγἀ2ν1απόγἀ2ν1απογἀ2ν1απόνἀ2ν1απόνἀ2ν1απονἀ2ν1απόπἀ2ν1απόπἀ2ν1αποπἀ2ν1απόσἀ2ν1απόσἀ2ν1απόϲἀ2ν1απόϲἀ2ν1αποσἀ2ν1αποϲἀ3ν2αρίτἀ3ν2αρίτἀ3ν2αρῖτἀ3ν2αριτἀ3ν2αρύτἀ3ν2αρύτἀ2ν1άσκηἀ2ν1άσκηἀ2ν1άϲκηἀ2ν1άϲκηἀ2ν1ασκήἀ2ν1ασκήἀ2ν1αϲκήἀ2ν1αϲκήἄ2ν1ασπιἄ2ν1αϲπιἀ2ν1ασπίἀ2ν1ασπίἀ2ν1αϲπίἀ2ν1αϲπίἀ2ν1ατὶ_ἀ2ν1ατί_ἀ2ν1ατί_ἀ3ν2αυδίἀ3ν2αυδίἀ3ν2αυδιἀ2ν1αφοῦἀ2ν1αφεῖἀ2ν1αφοῖἀ3ν2αφῆνἀ2ν1αχύρἀ2ν1αχύρἀ2ν1αχυρἀ2ν1έδεσἀ2ν1έδεσἀ2ν1έδεϲἀ2ν1έδεϲἀ2ν1εδέσἀ2ν1εδέσἀ2ν1εδέϲἀ2ν1εδέϲἀ2ν1εθέλἀ2ν1εθέλἀ2ν1εθελἀ2ν1είδεἀ2ν1είδεἀ2ν1ειδέἀ2ν1ειδέἀ2ν1είδωἀ2ν1είδωἀ2ν1ειδώἀ2ν1ειδώἀ2ν1είκαἀ2ν1είκαἀ2ν1εικάἀ2ν1εικάἀ2ν1εικόἀ2ν1εικόἀ2ν1εικοἀ2ν1είμαἀ2ν1είμαἀνε2κ1λόἀνε2κ1λόἀνε2κ1λοἀ2ν1έλαιἀ2ν1έλαιἀ2ν1ελαιἀ2ν1ελάτἀ2ν1ελάτἀ2ν1ελατἀ2ν1ελέηἀ2ν1ελέηἀ2ν1ελεήἀ2ν1ελεήἀ2ν1έλεοἀ2ν1έλεοἀ2ν1ελέοἀ2ν1ελέοἀ2ν1ελέωἀ2ν1ελέωἀ2ν1έλεεἀ2ν1έλεεἀ2ν1ελκήἀ2ν1ελκήἀ2ν1ελκὴἀ2ν1ελκοἀ2ν1ελκῆἀ2ν1ελκεἀ2ν1ελκῶἄ2ν1ελκτἀ2ν1έλκτἀ2ν1έλκτἀ2ν1έλκωἀ2ν1έλκωἀ2ν1ελκώἀ2ν1ελκώἀ2ν1έλπιἀ2ν1έλπιἀ2ν1ελπίἀ2ν1ελπίἀ2ν1έμετἀ2ν1έμετἀ2ν1εμέτἀ2ν1εμέτἀ3ν2ένειἀ3ν2ένειἀ2ν1ε2ξ1ἀ2ν1έστιἀ2ν1έστιἀ2ν1έϲτιἀ2ν1έϲτιἀ2ν1εστίἀ2ν1εστίἀ2ν1εϲτίἀ2ν1εϲτίἀ2ν1έταιἀ2ν1έταιἀ2ν1εταίἀ2ν1εταίἀ2ν1έτοιἀ2ν1έτοιἀ2ν1ετοίἀ2ν1ετοίἀ2ν1ευκτἀ3ν2εφάλἀ3ν2εφάλἀ3ν2έφελἀ3ν2έφελἀ3ν2εφέλἀ3ν2εφέλἀ2ν1ηγεμἀ2ν1ήκεσἀ2ν1ήκεσἀ2ν1ήκεϲἀ2ν1ήκεϲἀ2ν1ηκέσἀ2ν1ηκέσἀ2ν1ηκέϲἀ2ν1ηκέϲἀ2ν1ηλάκἀ2ν1ηλάκἀ2ν1ηλακἀ2ν1ηλεγἀ2ν1ηλεήἀ2ν1ηλεήἀ2ν1ηλεὴἀ2ν1ηλεοἀ2ν1ηλεεἀ2ν1ηλεῶἀ2ν1ηλεέἀ2ν1ηλεέἀ2ν1ηλεὲἀ2ν1ηλεῆἀ2ν1ηλέηἀ2ν1ηλέηἀ2ν1ηλοῦἀ2ν1ηλεῖἀ2ν1ηλοῖἀ2ν1ήλικἀ2ν1ήλικἀ2ν1ηλίκἀ2ν1ηλίκἀ2ν1ήλιοἀ2ν1ήλιοἀ2ν1ηλίοἀ2ν1ηλίοἀ2ν1ηλίωἀ2ν1ηλίωἀ2ν1ήλιαἀ2ν1ήλιαἀ2ν1ήλιπἀ2ν1ήλιπἀ2ν1ηλίπἀ2ν1ηλίπἀ2ν1ηλιφἀ2ν1ήρειἀ2ν1ήρειἀ2ν1ηρείἀ2ν1ηρείἀ2ν1ηρέμἀ2ν1ηρέμἀ2ν1ηρεμἀ2ν1ηρεφἀ2ν1ήροτἀ2ν1ήροτἀ2ν1ηρότἀ2ν1ηρότἀ2ν1ίδιοἀ2ν1ίδιοἀ2ν1ιδίοἀ2ν1ιδίοἀ2ν1ιδίωἀ2ν1ιδίωἀ2ν1ίδιαἀ2ν1ίδιαἀ2ν1ιδιτἀ2ν1ίδρωἀ2ν1ίδρωἄ2ν1ιδρεἀ3ν2ιέρωἀ3ν2ιέρωἀ3ν2ισᾶτἀ3ν2ιϲᾶτἀ3ν2ισάτἀ3ν2ισάτἀ3ν2ιϲάτἀ3ν2ιϲάτἀ4ν3ίσχυἀ4ν3ίσχυἀ4ν3ίϲχυἀ4ν3ίϲχυἀ2ν1οικεἄ2ν1οικτἀ2ν1οίκτἀ2ν1οίκτἀ2ν1ομήλἀ2ν1ομήλἀ2ν1ομηλἀ2ν1ομίλἀ2ν1ομίλἀ2ν1ομιλἀ2ν1όμιχἀ2ν1όμιχἀ2ν1ομιχἀ3ν2ομοθἀ3ν2όμῳ_ἀ3ν2όμῳ_ἀ3ν2όμω_ἀ3ν2όμω_ἀ3ν2ορμάἀ3ν2ορμάἀ2ν1όσφρἀ2ν1όσφρἀ2ν1όϲφρἀ2ν1όϲφρἀ2ν1οσφρἀ2ν1οϲφρἀ2ν1ούσιἀ2ν1ούσιἀ2ν1ούϲιἀ2ν1ούϲιἀ2ν1ουσίἀ2ν1ουσίἀ2ν1ουϲίἀ2ν1ουϲίἀντει2σ1ἀντει2ϲ1ἀ2ν1ωφέλἀ2ν1ωφέλἀ2ν1ωφελἀπα2ν1αιἀπά2ν1ουἀπά2ν1ουἀποσυ2ν1ἀποϲυ2ν1ἀπρο3σ2τἀπρο3ϲ2τἀρρε2ν1ωἀστε2ρ1ωἀϲτε2ρ1ωαὐτέ2κ1μαὐτέ2κ1μαὐτε2κ1μ_διό2σ1κ_διό2σ1κ_διό2ϲ1κ_διό2ϲ1κ_διο2σ1κ_διο2ϲ1κ_διό2σ1π_διό2σ1π_διό2ϲ1π_διό2ϲ1π_διο2σ1π_διο2ϲ1πδύ3σ2ει_δύ3σ2ει_δύ3ϲ2ει_δύ3ϲ2ει__δύ3σ2ετ_δύ3σ2ετ_δύ3ϲ2ετ_δύ3ϲ2ετδύ3σ2οι_δύ3σ2οι_δύ3ϲ2οι_δύ3ϲ2οι_δύ3σ2ων_δύ3σ2ων_δύ3ϲ2ων_δύ3ϲ2ων_δύ3σ2ουσδύ3σ2ουσδύ3ϲ2ουϲδύ3ϲ2ουϲδυ3σ2ούσδυ3σ2ούσδυ3ϲ2ούϲδυ3ϲ2ούϲδύ3σ2αι_δύ3σ2αι_δύ3ϲ2αι_δύ3ϲ2αι_δύ3σ2ον_δύ3σ2ον_δύ3ϲ2ον_δύ3ϲ2ον_δύ3σ2ας_δύ3σ2ας_δύ3ϲ2αϲ_δύ3ϲ2αϲ_δύ3σ2αν_δύ3σ2αν_δύ3ϲ2αν_δύ3ϲ2αν_δύ3σ2αντδύ3σ2αντδύ3ϲ2αντδύ3ϲ2αντδυ3σ2άντδυ3σ2άντδυ3ϲ2άντδυ3ϲ2άντ_δύ3σ2εσ_δύ3σ2εσ_δύ3ϲ2εϲ_δύ3ϲ2εϲδύ3σ2εο_δύ3σ2εο_δύ3ϲ2εο_δύ3ϲ2εο__δυσέ2κ1_δυσέ2κ1_δυϲέ2κ1_δυϲέ2κ1_δυσε2κ1_δυϲε2κ1_δυσέ2ξ1_δυσέ2ξ1_δυϲέ2ξ1_δυϲέ2ξ1_δυσε2ξ1_δυϲε2ξ1_δυ3σ2ιθ_δυ3ϲ2ιθδύ3σ2ις_δύ3σ2ις_δύ3ϲ2ιϲ_δύ3ϲ2ιϲ_δύ3σ2ισ_δύ3σ2ισ_δύ3σ2ιν_δύ3σ2ιν_δύ3ϲ2ιν_δύ3ϲ2ιν__δύ3σ2κε_δύ3σ2κε_δύ3ϲ2κε_δύ3ϲ2κε_δυ3σ2μῇ_δυ3ϲ2μῇ_δυ3σ2μᾶ_δυ3ϲ2μᾶ_δυ3σ2μα_δυ3ϲ2μα_δυ3σ2μῶ_δυ3ϲ2μῶεἰ3σ2ίν_εἰ3σ2ίν_εἰ3ϲ2ίν_εἰ3ϲ2ίν_εἰ3σ2ὶν_εἰ3ϲ2ὶν_εἰ3σ2ιν_εἰ3ϲ2ιν_εἴ3σ2οιοεἴ3ϲ2οιοεἴ3σ2ατοεἴ3ϲ2ατοεἴ3σ2αιοεἴ3ϲ2αιοἐ3κ2λήθηἐ3κ2λήθηἐ4κ3λείπἐ4κ3λείπἐ4κ3λείψἐ4κ3λείψἐ3κ2κλέπἐ3κ2κλέπἐ3κ2κλέψἐ3κ2κλέψἐ4κ3λάπτἐ4κ3λάπτἐ4κ3λαπτἐ3κ2κλώσἐ3κ2κλώσἐ3κ2κλώϲἐ3κ2κλώϲἔ3κ2λεισἔ3κ2λειϲἐ3κ2ραύγἐ3κ2ραύγἐ3κ2ραυγἐ2κ1τάμνἐ2κ1τάμνἐ3κ2τείνἐ3κ2τείνἔ3κ2τισαἔ3κ2τιϲαἐ3κ2τίσαἐ3κ2τίσαἐ3κ2τίϲαἐ3κ2τίϲαἐ3κ2τός_ἐ3κ2τός_ἐ3κ2τόϲ_ἐ3κ2τόϲ_ἐ3κ2τὸς_ἐ3κ2τὸϲ_ἐ3κ2τόσ_ἐ3κ2τόσ_ἐ3κ2τὸσ_ἔ2κ1τυποἑλλή2σ1πἑλλή2σ1πἑλλή2ϲ1πἑλλή2ϲ1πἑλλη2σ1πἑλλη2ϲ1πἐ3ν2άκιςἐ3ν2άκιςἐ3ν2άκιϲἐ3ν2άκιϲἐ3ν2ακισἐ3ν2ακιϲἐ3ν2ακόσἐ3ν2ακόσἐ3ν2ακόϲἐ3ν2ακόϲἐ3ν2ακοσἐ3ν2ακοϲἔ3ν2αρα_ἐ3ν2αρηφἐ4ν3αραρἐ3ν2άρεεἐ3ν2άρεεἐ3ν2αρέωἐ3ν2αρέωἐ3ν2αρέαἐ3ν2αρέαἐ3ν2αρεάἐ3ν2αρεάἐ3ν2άριεἐ3ν2άριεἐ3ν2αρίωἐ3ν2αρίωἐ3ν2αρίαἐ3ν2αρίαἐ3ν2αριάἐ3ν2αριάἐνδυ2σ1τἐνδυ2ϲ1τἐ3ν2εμήθἐ3ν2εμήθἐ3ν2έπειἐ3ν2έπειἔ3ν2ερθεἐ5ν4ιαύσἐ5ν4ιαύσἐ5ν4ιαύϲἐ5ν4ιαύϲἐ5ν4ιαυσἐ5ν4ιαυϲἔ3ν2οις_ἔ3ν2οιϲ_ἔ3ν2οισ_ἐ3ν2υοῦςἐ3ν2υοῦϲἐ3ξ2υ2ν1ἐπεί3σ2θἐπεί3σ2θἐπεί3ϲ2θἐπεί3ϲ2θἐπει3σ2θἐπει3ϲ2θἐπε2κ1τρἐπέ2κ1τρἐπέ2κ1τρἐπισυ2ν1ἐπιϲυ2ν1ἐ3σ2μὲν_ἐ3ϲ2μὲν_ἐ3σ2μέν_ἐ3σ2μέν_ἐ3ϲ2μέν_ἐ3ϲ2μέν_εὐπρό2σ1εὐπρό2σ1εὐπρό2ϲ1εὐπρό2ϲ1εὐπρο2σ1εὐπρο2ϲ1_θεό2σ1δ_θεό2σ1δ_θεό2ϲ1δ_θεό2ϲ1δ_θεο2σ1δ_θεο2ϲ1δ_θυο2σ1κ_θυο2ϲ1κ_κα2ν1εν_κα2ν1έν_κα2ν1έν_κρά2σ1π_κρά2σ1π_κρά2ϲ1π_κρά2ϲ1π_κρα2σ1π_κρα2ϲ1π_μογι2σ1_μογι2ϲ1_μυ2σ1επ_μυ2ϲ1επ_νου2ν1ε_ξυ2ν1αγ_ξυ3ν2εώ_ξυ3ν2εώ_ξυ3ν2εῶ_ξυ2ν1ῆκοἰ2σ1πώτοἰ2σ1πώτοἰ2ϲ1πώτοἰ2ϲ1πώτοἰ2σ1πωτοἰ2ϲ1πωτὅ2σ1περ_ὅ2ϲ1περ__παλι2ν1_παλί2ν1_παλί2ν1_πα3ν2ί__πα3ν2ί__πα3ν2ὶ__πα3ν2ικ_πα3ν2ῷ__πα3ν2ό__πα3ν2ό__πα3ν2ὸ__πα3ν2έ__πα3ν2έ__πα3ν2ὲ__παρε2ξ1_παρέ2ξ1_παρέ2ξ1παρέ3ξ2ῃπαρέ3ξ2ῃ_προε2κ1_προε2ν1_προε2ξ1_προέ2ξ1_προέ2ξ1_πυ2ρ1άγ_πυ2ρ1άγ_πυ2ρ1αγ_πυ2ρ1ῆθ_πυ2ρ1ηθ_πυ2ρ1ήθ_πυ2ρ1ήθ_πυ2ρ1ακ_πύ2ρ1αυ_πύ2ρ1αυ_πυ2ρ1αύ_πυ2ρ1αύ_πυ2ρ1αυ_πυ2ρ1ωπ_συνε2ξ1_ϲυνε2ξ1_τρι3σ2π_τρι3ϲ2π_τρί3σ2τ_τρί3σ2τ_τρί3ϲ2τ_τρί3ϲ2τ_τρι3σ2τ_τρι3ϲ2τ_τρι3σ2ώ_τρι3σ2ώ_τρι3ϲ2ώ_τρι3ϲ2ώ_τρι3σ2ω_τρι3ϲ2ωὑπέ3ρ2α_ὑπέ3ρ2α_ὑπέ3ρ2ᾳ_ὑπέ3ρ2ᾳ_ὑπε3ρ2εθὑπε3ρ2έθὑπε3ρ2έθὑπε3ρ2είὑπε3ρ2είὑπέ3ρ2υθὑπέ3ρ2υθὑπε3ρ2ύθὑπε3ρ2ύθὑπε3ρ2υθὑπε3ρ2έψὑπε3ρ2έψὑπε3ρ2εψὑπε3ρ2έωὑπε3ρ2έωὑπε3ρ2έεὑπε3ρ2έεὑπε3ρ2έοὑπε3ρ2έοὑπε3ρ2οῦ_φαε2σ1φ_φαε2ϲ1φὥ2σ1περ_ὥ2ϲ1περ_",
        9: "ἀμπαλί2ν1ἀμπαλί2ν1ἀμπαλι2ν1ἀ2ν1αγής_ἀ2ν1αγής_ἀ2ν1αγήϲ_ἀ2ν1αγήϲ_ἀ2ν1αγὴς_ἀ2ν1αγὴϲ_ἀ2ν1αγήσ_ἀ2ν1αγήσ_ἀ2ν1αγὴσ_ἀ2ν1αγεῖ_ἀ2ν1αγές_ἀ2ν1αγές_ἀ2ν1αγέϲ_ἀ2ν1αγέϲ_ἀ2ν1αγὲς_ἀ2ν1αγὲϲ_ἀ2ν1αγέσ_ἀ2ν1αγέσ_ἀ2ν1αγὲσ_ἀ2ν1αγῶν_ἀ2ν1αγέσιἀ2ν1αγέσιἀ2ν1αγέϲιἀ2ν1αγέϲιἀ3ν2αγώγιἀ3ν2αγώγιἀ3ν2αγωγίἀ3ν2αγωγίἀ2ν1ακόλοἀ2ν1ακόλοἀ2ν1ακολοἀ2ν1άλειπἀ2ν1άλειπἀ2ν1αλείπἀ2ν1αλείπἀ2ν1αλειφἀ2ν1άλειφἀ2ν1άλειφἀ2ν1αλείφἀ2ν1αλείφἀ2ν1άλιστἀ2ν1άλιστἀ2ν1άλιϲτἀ2ν1άλιϲτἀ2ν1αλίστἀ2ν1αλίστἀ2ν1αλίϲτἀ2ν1αλίϲτἀ2ν1άλων_ἀ2ν1άλων_ἀ2ν1αμάρτἀ2ν1αμάρτἀ2ν1αμαρτἀ2ν1αμέλγἀ2ν1αμέλγἀ2ν1αμελγἀναμφι2σ1ἀναμφι2ϲ1ἀ2ν1ανάγκἀ2ν1ανάγκἀ2ν1αναγκἀ2ν1ανταγἀ2ν1ανταπἀ2ν1αξιόλἀ2ν1αξιόλἀ2ν1αξιολἀ2ν1αξιόπἀ2ν1αξιόπἀ2ν1αξιοπἀ2ν1απάρτἀ2ν1απάρτἀ2ν1απαρτἀ2ν1απαύδἀ2ν1απαύδἀ2ν1απαυδἀ2ν1αποδήἀ2ν1αποδήἀ2ν1αποδηἀ2ν1απόδοἀ2ν1απόδοἀ2ν1αποδόἀ2ν1αποδόἀ2ν1απόδρἀ2ν1απόδρἀ2ν1αποδρἀ2ν1απολόἀ2ν1απολόἀ2ν1απολοἀ2ν1απόλυἀ2ν1απόλυἀ2ν1απολύἀ2ν1απολύἀ2ν1απότεἀ2ν1απότεἀ2ν1αποτεἀ2ν1απότμἀ2ν1απότμἀ2ν1αποτμἀ2ν1απότρἀ2ν1απότρἀ2ν1αποτρἀ4ν3αρραγἀ2ν1άσσατἀ2ν1άσσατἀ2ν1άϲϲατἀ2ν1άϲϲατἀ2ν1ασσάτἀ2ν1ασσάτἀ2ν1αϲϲάτἀ2ν1αϲϲάτἀ2ν1άστειἀ2ν1άστειἀ2ν1άϲτειἀ2ν1άϲτειἀ2ν1αστείἀ2ν1αστείἀ2ν1αϲτείἀ2ν1αϲτείἀ2ν1ατεὶ_ἀ2ν1ατεί_ἀ2ν1ατεί_ἄ2ν1ατος_ἄ2ν1ατοϲ_ἄ2ν1ατοσ_ἀ2ν1άτου_ἀ2ν1άτου_ἄ2ν1ατον_ἄ2ν1ατοι_ἀ2ν1αφαίρἀ2ν1αφαίρἀ2ν1αφαιρἀ2ν1εφῶν_ἀ2ν1αφρόδἀ2ν1αφρόδἀ2ν1αφροδἀνδρό2σ1αἀνδρό2σ1αἀνδρό2ϲ1αἀνδρό2ϲ1αἀνδρο2σ1αἀνδρο2ϲ1αἀ2ν1έγερτἀ2ν1έγερτἀ2ν1εγέρτἀ2ν1εγέρτἀ2ν1έδρασἀ2ν1έδρασἀ2ν1έδραϲἀ2ν1έδραϲἀ2ν1εδράσἀ2ν1εδράσἀ2ν1εδράϲἀ2ν1εδράϲἀ2ν1ειλείἀ2ν1ειλείἀ2ν1ειλειἀ3ν2εκάς_ἀ3ν2εκάς_ἀ3ν2εκάϲ_ἀ3ν2εκάϲ_ἀ3ν2εκὰς_ἀ3ν2εκὰϲ_ἀ3ν2εκάσ_ἀ3ν2εκάσ_ἀ3ν2εκὰσ_ἀνε2κ1λιπἀ2ν1έλεγκἀ2ν1έλεγκἀ2ν1ελέγκἀ2ν1ελέγκἀ2ν1ελεγξἀ2ν1ελκέσἀ2ν1ελκέσἀ2ν1ελκέϲἀ2ν1ελκέϲἀ2ν1έλυτρἀ2ν1έλυτρἀ2ν1ελύτρἀ2ν1ελύτρἀ2ν1εραστἀ2ν1εραϲτἀ2ν1έραστἀ2ν1έραστἀ2ν1έραϲτἀ2ν1έραϲτἀ2ν1εράστἀ2ν1εράστἀ2ν1εράϲτἀ2ν1εράϲτἀ2ν1έρεικἀ2ν1έρεικἀ2ν1ερείκἀ2ν1ερείκἀ2ν1έρεισἀ2ν1έρεισἀ2ν1έρειϲἀ2ν1έρειϲἀ2ν1ερείσἀ2ν1ερείσἀ2ν1ερείϲἀ2ν1ερείϲἀ2ν1εύρετἀ2ν1εύρετἀ2ν1ευρέτἀ2ν1ευρέτἀ2ν1ηλάτωἀ2ν1ηλάτωἀ2ν1ήλαταἀ2ν1ήλαταἀ2ν1ήλειπἀ2ν1ήλειπἀ2ν1ηλείπἀ2ν1ηλείπἄ2ν1ιδροςἄ2ν1ιδροϲἄ2ν1ιδροσἀ2ν1ίδρουἀ2ν1ίδρουἄ2ν1ιδρονἀ2ν1ίδροιἀ2ν1ίδροιἄ2ν1ιδροιἀ2ν1ίδρυτἀ2ν1ίδρυτἀ2ν1ιδρύτἀ2ν1ιδρύτἀ2ν1ιδρωτἀ2ν1ιδρώτἀ2ν1ιδρώτἀ2ν1ιεράτἀ2ν1ιεράτἀ2ν1ίμαστἀ2ν1ίμαστἀ2ν1ίμαϲτἀ2ν1ίμαϲτἀ2ν1ιμάστἀ2ν1ιμάστἀ2ν1ιμάϲτἀ2ν1ιμάϲτἀ2ν1οικονἀ2ν1οικτίἀ2ν1οικτίἀ2ν1οίμωκἀ2ν1οίμωκἀ2ν1οιμώκἀ2ν1οιμώκἀ2ν1οιμωκἄ2ν1οιστρἄ2ν1οιϲτρἀ2ν1οίστρἀ2ν1οίστρἀ2ν1οίϲτρἀ2ν1οίϲτρἀ2ν1ομβρίἀ2ν1ομβρίἀ2ν1ομβρῖἄ2ν1ομβροἀ2ν1όμβροἀ2ν1όμβροἀ2ν1όμβρωἀ2ν1όμβρωἄ2ν1ομβραἀ3ν2όμου_ἀ3ν2όμου_ἀ3ν2όμων_ἀ3ν2όμων_ἀ3ν2οργάζἀ3ν2οργάζἀ2ν1όχευτἀ2ν1όχευτἀ2ν1οχεύτἀ2ν1οχεύτἀντα2ν1ισἀντα2ν1ιϲἀντα2ν1ίσἀντα2ν1ίσἀντα2ν1ίϲἀντα2ν1ίϲἀντιδυ2σ1ἀντιδυ2ϲ1ἀντισύ2ν1ἀντισύ2ν1ἀντιϲύ2ν1ἀντιϲύ2ν1ἀντισυ2ν1ἀντιϲυ2ν1ἀπα2ν1ούρἀπα2ν1ούρἀπρό3σ2κεἀπρό3σ2κεἀπρό3ϲ2κεἀπρό3ϲ2κεἀπρο3σ2κέἀπρο3σ2κέἀπρο3ϲ2κέἀπρο3ϲ2κέἀπρό3σ2κοἀπρό3σ2κοἀπρό3ϲ2κοἀπρό3ϲ2κοἀπρο3σ2κόἀπρο3σ2κόἀπρο3ϲ2κόἀπρο3ϲ2κόἀρχισυ2ν1ἀρχιϲυ2ν1_γερα2σ1φ_γερα2ϲ1φ_διέ2κ1ρο_διέ2κ1ρο_διε2κ1ρό_διε2κ1ρό_δικα2σ1π_δικα2ϲ1πδύ3σ2εις_δύ3σ2εις_δύ3ϲ2ειϲ_δύ3ϲ2ειϲ_δύ3σ2εισ_δύ3σ2εισ_δύ3σ2οις_δύ3σ2οις_δύ3ϲ2οιϲ_δύ3ϲ2οιϲ_δύ3σ2οισ_δύ3σ2οισ_δύ3σ2ειν_δύ3σ2ειν_δύ3ϲ2ειν_δύ3ϲ2ειν_δύ3σ2ωσι_δύ3σ2ωσι_δύ3ϲ2ωϲι_δύ3ϲ2ωϲι_δύ3σ2αις_δύ3σ2αις_δύ3ϲ2αιϲ_δύ3ϲ2αιϲ_δύ3σ2αισ_δύ3σ2αισ_δύ3σ2ειε_δύ3σ2ειε_δύ3ϲ2ειε_δύ3ϲ2ειε_δύ3σ2αιενδύ3σ2αιενδύ3ϲ2αιενδύ3ϲ2αιενδυ3σ2άτω_δυ3σ2άτω_δυ3ϲ2άτω_δυ3ϲ2άτω_δύ3σ2ατε_δύ3σ2ατε_δύ3ϲ2ατε_δύ3ϲ2ατε_δύ3σ2οιο_δύ3σ2οιο_δύ3ϲ2οιο_δύ3ϲ2οιο_δύ3σ2αιο_δύ3σ2αιο_δύ3ϲ2αιο_δύ3ϲ2αιο_δυ3σ2άμενδυ3σ2άμενδυ3ϲ2άμενδυ3ϲ2άμενδύ3σ2ατο_δύ3σ2ατο_δύ3ϲ2ατο_δύ3ϲ2ατο_δύ3σ2ετο_δύ3σ2ετο_δύ3ϲ2ετο_δύ3ϲ2ετο_δύ3σ2εσι_δύ3σ2εσι_δύ3ϲ2εϲι_δύ3ϲ2εϲι__δυ3σ2μή__δυ3σ2μή__δυ3ϲ2μή__δυ3ϲ2μή__δυ3σ2μὴ__δυ3ϲ2μὴ__δυ3σ2μῆ__δυ3ϲ2μῆ__δυσξύ2ν1_δυσξύ2ν1_δυϲξύ2ν1_δυϲξύ2ν1_δυσξυ2ν1_δυϲξυ2ν1_δύ3σ2ταν_δύ3σ2ταν_δύ3ϲ2ταν_δύ3ϲ2ταν_δυ3σ2τάν_δυ3σ2τάν_δυ3ϲ2τάν_δυ3ϲ2τάν_δυ3σ2την_δυ3ϲ2την_δυ3σ2τήν_δυ3σ2τήν_δυ3ϲ2τήν_δυ3ϲ2τήνεἴ3σ2οιτοεἴ3ϲ2οιτοεἰ3σ2όμενεἰ3σ2όμενεἰ3ϲ2όμενεἰ3ϲ2όμενεἰ3σ2ομένεἰ3σ2ομένεἰ3ϲ2ομένεἰ3ϲ2ομένεἴ3σ2ασθεεἴ3ϲ2αϲθεεἴ3σ2αντοεἴ3ϲ2αντοεἴ3σ2ωμαιεἴ3ϲ2ωμαιεἴ3σ2ησθεεἴ3ϲ2ηϲθεεἴ3σ2αιτοεἴ3ϲ2αιτοεἰ3σ2άσθωεἰ3σ2άσθωεἰ3ϲ2άϲθωεἰ3ϲ2άϲθωεἰ3σ2άμενεἰ3σ2άμενεἰ3ϲ2άμενεἰ3ϲ2άμενεἰ3σ2αμένεἰ3σ2αμένεἰ3ϲ2αμένεἰ3ϲ2αμένἐ4κ3λύσεωἐ4κ3λύσεωἐ4κ3λύϲεωἐ4κ3λύϲεωἐ4κ3λύσειἐ4κ3λύσειἐ4κ3λύϲειἐ4κ3λύϲειἔ2κ1ταμε_ἐ2κ1τύπῳ_ἐ2κ1τύπῳ_ἔ2κ1τυπε_ἐ2κ1τύπω_ἐ2κ1τύπω_ἐ2κτύποι_ἐ2κτύποι_ἔ2κ1τυπα_ἐ3ν2άρων_ἐ3ν2άρων_ἐ3ν2εμέσσἐ3ν2εμέσσἐ3ν2εμέϲϲἐ3ν2εμέϲϲἑ2ξ1ήρετμἑ2ξ1ήρετμἑ2ξ1ηρέτμἑ2ξ1ηρέτμἐπεί3σ2ω_ἐπεί3σ2ω_ἐπεί3ϲ2ω_ἐπεί3ϲ2ω_ἐπε2κ1τείἐπε2κ1τείἐπέ2κ1τειἐπέ2κ1τειἐ3σ2όμεθαἐ3σ2όμεθαἐ3ϲ2όμεθαἐ3ϲ2όμεθαἐ3σ2οίμηνἐ3σ2οίμηνἐ3ϲ2οίμηνἐ3ϲ2οίμην_θη2ρ1αγρ_κατει2σ1_κατει2ϲ1_κατε2ν1ή_κατε2ν1ή_κερα2σ1φ_κερα2ϲ1φ_κυνό2σ1α_κυνό2σ1α_κυνό2ϲ1α_κυνό2ϲ1α_κυνό2σ1β_κυνό2σ1β_κυνό2ϲ1β_κυνό2ϲ1β_κυνο2σ1β_κυνο2ϲ1β_κυνό2σ1ο_κυνό2σ1ο_κυνό2ϲ1ο_κυνό2ϲ1ο_κυνο2σ1ο_κυνο2ϲ1ο_κυνο2σ1φ_κυνο2ϲ1φ_μελά2ν1υ_μελά2ν1υ_μελα2ν1ύ_μελα2ν1ύ_μετε2ξ1α_μετε2ξ1έ_μετε2ξ1έ_μετε2ξ1ε_μογο2σ1τ_μογο2ϲ1τοἱο2ν1εί_οἱο2ν1εί_οἱο2ν1εὶ_ὁλο2ν1έν_ὁλο2ν1έν_ὁλο2ν1ὲν_ὁσο2ν1ῶν_ὁϲο2ν1ῶν_οἷ2σ1τισιοἷ2ϲ1τιϲιἧ2σ1τινοςἧ2ϲ1τινοϲαἷ2σ1τισιαἷ2ϲ1τιϲιἅ2σ1τιναςἅ2ϲ1τιναϲ_πα3ν2ός__πα3ν2ός__πα3ν2όϲ__πα3ν2όϲ__πα3ν2ὸς__πα3ν2ὸϲ__πα3ν2όσ__πα3ν2όσ__πα3ν2ὸσ__πα3ν2ῶν__πα3ν2ίσδ_πα3ν2ίσδ_πα3ν2ίϲδ_πα3ν2ίϲδ_πα3ν2ισδ_πα3ν2ιϲδ_πα3ν2οῦ__πα3ν2όν__πα3ν2όν__πα3ν2ὸν__πα3ν2οί__πα3ν2οί__πα3ν2οὶ__παρεί2σ1_παρεί2σ1_παρεί2ϲ1_παρεί2ϲ1_παρει2σ1_παρει2ϲ1_παρε2κ1λ_παρε2ν1οπαρέ3ξ2ω_παρέ3ξ2ω__πλεο2ν1έ_πλεο2ν1έ_πλεο2ν1ε_προει2σ1_προει2ϲ1_προ3σ2άβ_προ3σ2άβ_προ3ϲ2άβ_προ3ϲ2άβ_προ3σ2αβ_προ3ϲ2αβ_προ3σ2εί_προ3σ2εί_προ3ϲ2εί_προ3ϲ2εί_προσε2ν1_προϲε2ν1_προσε2ξ1_προϲε2ξ1_πρό3σ2θι_πρό3σ2θι_πρό3ϲ2θι_πρό3ϲ2θι_προ3σ2θί_προ3σ2θί_προ3ϲ2θί_προ3ϲ2θί_πρό3σ2τῳ_πρό3σ2τῳ_πρό3ϲ2τῳ_πρό3ϲ2τῳ_προ3σ2τῴ_προ3ϲ2τῴ_προ3σ2υγ_προ3ϲ2υγ_προ3σ2υμ_προ3ϲ2υμ_πρό3σ2ω__πρό3σ2ω__πρό3ϲ2ω__πρό3ϲ2ω__προ3σ2ώτ_προ3σ2ώτ_προ3ϲ2ώτ_προ3ϲ2ώτ_προ3σ2ωτ_προ3ϲ2ωτ_πυ2ρ1αίθ_πυ2ρ1αίθ_πυ2ρ1αιθ_συνδυ2σ1_ϲυνδυ2ϲ1_τρει2σ1κ_τρει2ϲ1κ_τρι3σ2μό_τρι3σ2μό_τρι3ϲ2μό_τρι3ϲ2μό_τρι3σ2μο_τρι3ϲ2μο_τρι3σ2μῶ_τρι3ϲ2μῶὑπεί3σ2αςὑπεί3σ2αςὑπεί3ϲ2αϲὑπεί3ϲ2αϲὑπεί3σ2ασὑπεί3σ2ασὑπεί3σ2ανὑπεί3σ2ανὑπεί3ϲ2ανὑπεί3ϲ2ανὑπει3σ2άνὑπει3σ2άνὑπει3ϲ2άνὑπει3ϲ2άνὑπει3σ2άσὑπει3σ2άσὑπει3ϲ2άϲὑπει3ϲ2άϲὑπε2κ1λαμὑπε2κ1λήψὑπε2κ1λήψὑπέ3ρ2ης_ὑπέ3ρ2ης_ὑπέ3ρ2ηϲ_ὑπέ3ρ2ηϲ_ὑπέ3ρ2ησ_ὑπέ3ρ2ησ_ὑπέ3ρ2αν_ὑπέ3ρ2αν_ὑπέ3ρ2αι_ὑπέ3ρ2αι_ὑπε3ρ2ῶν_ὑπέ3ρ2ας_ὑπέ3ρ2ας_ὑπέ3ρ2αϲ_ὑπέ3ρ2αϲ_ὑπέ3ρ2ασ_ὑπέ3ρ2ασ_ὑπε3ρ2έπτὑπε3ρ2έπτὑπε3ρ2επτὑπε3ρ2εῖ_ὑπε3ρ2εῖτ_χει2ρ1άγ_χει2ρ1άγ_χει2ρ1αγ_χει2ρ1απ_χει2ρ1αψ_χει2ρ1ου_χει2ρ1ῶν_χει2ρ1άν_χει2ρ1άν_χει2ρ1αν_χη2ν1ναλ",
        10: "ἀ2ν1αγεῖς_ἀ2ν1αγεῖϲ_ἀ2ν1αγεῖσ_ἀ4ν3αγωγίαἀ4ν3αγωγίαἀ3ν2αλδήσκἀ3ν2αλδήσκἀ3ν2αλδήϲκἀ3ν2αλδήϲκἀ4ν3ανθές_ἀ4ν3ανθές_ἀ4ν3ανθέϲ_ἀ4ν3ανθέϲ_ἀ4ν3ανθὲς_ἀ4ν3ανθὲϲ_ἀ4ν3ανθέσ_ἀ4ν3ανθέσ_ἀ4ν3ανθὲσ_ἀ4ν3ανθέσιἀ4ν3ανθέσιἀ4ν3ανθέϲιἀ4ν3ανθέϲιἀ2ν1απάλλαἀ2ν1απάλλαἀ2ν1απαλλάἀ2ν1απαλλάἀ2ν1απόλαυἀ2ν1απόλαυἀ2ν1απολαύἀ2ν1απολαύἀ3ν2αστείβἀ3ν2αστείβἀ3ν2αϲτείβἀ3ν2αϲτείβἀ3ν2άστειρἀ3ν2άστειρἀ3ν2άϲτειρἀ3ν2άϲτειρἀ3ν2αστείρἀ3ν2αστείρἀ3ν2αϲτείρἀ3ν2αϲτείρἀ3ν2άστειχἀ3ν2άστειχἀ3ν2άϲτειχἀ3ν2άϲτειχἀ3ν2αστείχἀ3ν2αστείχἀ3ν2αϲτείχἀ3ν2αϲτείχἀ2ν1άτοις_ἀ2ν1άτοις_ἀ2ν1άτοιϲ_ἀ2ν1άτοιϲ_ἀ2ν1άτοισ_ἀ2ν1άτοισ_ἀ2ν1εί2σ1οἀ2ν1εί2σ1οἀ2ν1εί2ϲ1οἀ2ν1εί2ϲ1οἀ2ν1ει2σ1όἀ2ν1ει2σ1όἀ2ν1ει2ϲ1όἀ2ν1ει2ϲ1όἀ2ν1ελκές_ἀ2ν1ελκές_ἀ2ν1ελκέϲ_ἀ2ν1ελκέϲ_ἀ2ν1ελκὲς_ἀ2ν1ελκὲϲ_ἀ2ν1ελκέσ_ἀ2ν1ελκέσ_ἀ2ν1ελκὲσ_ἀ3ν2έντες_ἀ3ν2έντες_ἀ3ν2έντεϲ_ἀ3ν2έντεϲ_ἀ3ν2έντεσ_ἀ3ν2έντεσ_ἀ2ν1ηλάτουἀ2ν1ηλάτουἀ2ν1ήλατε_ἀ2ν1ήλατε_ἀ2ν1ηλάτοιἀ2ν1ηλάτοιἀ2ν1ήλατοιἀ2ν1ήλατοιἀ4ν3ιστορηἀ4ν3ιϲτορηἀ4ν3ιστόρηἀ4ν3ιστόρηἀ4ν3ιϲτόρηἀ4ν3ιϲτόρηἀ4ν3ιστορήἀ4ν3ιστορήἀ4ν3ιϲτορήἀ4ν3ιϲτορήἀ2ν1ιχνεύτἀ2ν1ιχνεύτἀ2ν2όμοιν_ἀ2ν2όμοιν_ἀ3ν2όμοις_ἀ3ν2όμοις_ἀ3ν2όμοιϲ_ἀ3ν2όμοιϲ_ἀ3ν2όμοισ_ἀ3ν2όμοισ_ἀ3ν2όμους_ἀ3ν2όμους_ἀ3ν2όμουϲ_ἀ3ν2όμουϲ_ἀ3ν2όμουσ_ἀ3ν2όμουσ_ἀντιπρο2σ1ἀντιπρο2ϲ1ἀ2ν1υπέ2ρ1ἀ2ν1υπέ2ρ1ἀ2ν1υπε2ρ1δύ3σ2ομεν_δύ3σ2ομεν_δύ3ϲ2ομεν_δύ3ϲ2ομεν_δύ3σ2οιμι_δύ3σ2οιμι_δύ3ϲ2οιμι_δύ3ϲ2οιμι_δύ3σ2οιτε_δύ3σ2οιτε_δύ3ϲ2οιτε_δύ3ϲ2οιτε_δύ3σ2οιεν_δύ3σ2οιεν_δύ3ϲ2οιεν_δύ3ϲ2οιεν_δύ3σ2ητον_δύ3σ2ητον_δύ3ϲ2ητον_δύ3ϲ2ητον_δύ3σ2ωμεν_δύ3σ2ωμεν_δύ3ϲ2ωμεν_δύ3ϲ2ωμεν_δύ3σ2αιμι_δύ3σ2αιμι_δύ3ϲ2αιμι_δύ3ϲ2αιμι_δύ3σ2ειας_δύ3σ2ειας_δύ3ϲ2ειαϲ_δύ3ϲ2ειαϲ_δύ3σ2ειασ_δύ3σ2ειασ_δύ3σ2αιτε_δύ3σ2αιτε_δύ3ϲ2αιτε_δύ3ϲ2αιτε_δύ3σ2ειαν_δύ3σ2ειαν_δύ3ϲ2ειαν_δύ3ϲ2ειαν_δύ3σ2ατον_δύ3σ2ατον_δύ3ϲ2ατον_δύ3ϲ2ατον_δυ3σ2άτων_δυ3σ2άτων_δυ3ϲ2άτων_δυ3ϲ2άτων_δύ3σ2ομαι_δύ3σ2ομαι_δύ3ϲ2ομαι_δύ3ϲ2ομαι_δύ3σ2οιτο_δύ3σ2οιτο_δύ3ϲ2οιτο_δύ3ϲ2οιτο__δυ3σ2όμεν_δυ3σ2όμεν_δυ3ϲ2όμεν_δυ3ϲ2όμεν_δυ3σ2ομέν_δυ3σ2ομέν_δυ3ϲ2ομέν_δυ3ϲ2ομένδύ3σ2ωμαι_δύ3σ2ωμαι_δύ3ϲ2ωμαι_δύ3ϲ2ωμαι_δύ3σ2ηται_δύ3σ2ηται_δύ3ϲ2ηται_δύ3ϲ2ηται_δυ3σ2ώμεθαδυ3σ2ώμεθαδυ3ϲ2ώμεθαδυ3ϲ2ώμεθαδύ3σ2ησθε_δύ3σ2ησθε_δύ3ϲ2ηϲθε_δύ3ϲ2ηϲθε_δύ3σ2αιτο_δύ3σ2αιτο_δύ3ϲ2αιτο_δύ3ϲ2αιτο_δυ3σ2άσθω_δυ3σ2άσθω_δυ3ϲ2άϲθω_δυ3ϲ2άϲθω_δύ3σ2ασθε_δύ3σ2ασθε_δύ3ϲ2αϲθε_δύ3ϲ2αϲθε_δυσ3σ2αμένδυσ3σ2αμένδυϲ3ϲ2αμένδυϲ3ϲ2αμένδύ3σ2αντο_δύ3σ2αντο_δύ3ϲ2αντο_δύ3ϲ2αντο__δυσεί2σ1β_δυσεί2σ1β_δυϲεί2ϲ1β_δυϲεί2ϲ1β_δυσει2σ1β_δυϲει2ϲ1βδυ3σ2έοιν_δυ3σ2έοιν_δυ3ϲ2έοιν_δυ3ϲ2έοιν_δύ3σ2εσιν_δύ3σ2εσιν_δύ3ϲ2εϲιν_δύ3ϲ2εϲιν__δυ3σ2μῆς__δυ3ϲ2μῆϲ__δυ3σ2μῆσ_εἴ3σ2εται_εἴ3ϲ2εται_εἴ3σ2εσθε_εἴ3ϲ2εϲθε_εἴ3σ2ονταιεἴ3ϲ2ονταιεἰ3σ2οίμηνεἰ3σ2οίμηνεἰ3ϲ2οίμηνεἰ3ϲ2οίμηνεἴ3σ2οισθεεἴ3ϲ2οιϲθεεἴ3σ2οιντοεἴ3ϲ2οιντοεἴ3σ2εσθαιεἴ3ϲ2εϲθαιεἴ3σ2άμην_εἴ3σ2άμην_εἴ3ϲ2άμην_εἴ3ϲ2άμην_εἴ3σ2ασθονεἴ3ϲ2αϲθονεἰ3σ2άσθηνεἰ3σ2άσθηνεἰ3ϲ2άϲθηνεἰ3ϲ2άϲθηνεἰ3σ2άμεθαεἰ3σ2άμεθαεἰ3ϲ2άμεθαεἰ3ϲ2άμεθαεἴ3σ2ησθονεἴ3ϲ2ηϲθονεἰ3σ2ώμεθαεἰ3σ2ώμεθαεἰ3ϲ2ώμεθαεἰ3ϲ2ώμεθαεἴ3σ2ωνταιεἴ3ϲ2ωνταιεἰ3σ2αίμηνεἰ3σ2αίμηνεἰ3ϲ2αίμηνεἰ3ϲ2αίμηνεἴ3σ2αισθεεἴ3ϲ2αιϲθεεἴ3σ2αιντοεἴ3ϲ2αιντοεἰ3σ2άσθωνεἰ3σ2άσθωνεἰ3ϲ2άϲθωνεἰ3ϲ2άϲθωνεἴ3σ2ασθαιεἴ3ϲ2αϲθαιἐ4κ3λύσεοιἐ4κ3λύσεοιἐ4κ3λύϲεοιἐ4κ3λύϲεοιἐ4κ3λύσεσιἐ4κ3λύσεσιἐ4κ3λύϲεϲιἐ4κ3λύϲεϲιἐ2κ1τύπου_ἐ2κ1τύπου_ἐ2κ1τύπων_ἐ2κ1τύπων_ἐ3ν2άροις_ἐ3ν2άροις_ἐ3ν2άροιϲ_ἐ3ν2άροιϲ_ἐ3ν2άροισ_ἐ3ν2άροισ_ἐ4ν3ιέτον_ἐ4ν3ιέτον_ἐ4ν3ίεμεν_ἐ4ν3ίεμεν_ἐπεί3σ2ατεἐπεί3σ2ατεἐπεί3ϲ2ατεἐπεί3ϲ2ατεἐπεί3σ2ατοἐπεί3σ2ατοἐπεί3ϲ2ατοἐπεί3ϲ2ατοἐπιπρό2σ1θἐπιπρό2σ1θἐπιπρό2ϲ1θἐπιπρό2ϲ1θἐπιπρο2σ1θἐπιπρο2ϲ1θ_θεμι2σ1κρ_θεμι2ϲ1κρ_καθυπε2ρ1_καλω2σ1ορ_καλω2ϲ1ορ_καλω2σ1όρ_καλω2σ1όρ_καλω2ϲ1όρ_καλω2ϲ1όρ_κα2ν1είς__κα2ν1είς__κα2ν1είϲ__κα2ν1είϲ__κα2ν1εὶς__κα2ν1εὶϲ__κα2ν1είσ__κα2ν1είσ__κα2ν1εὶσ__κατε2ν1αί_κατε2ν1αί_μελα2ν1άγ_μελα2ν1άγ_μελα2ν1αγ_μελα2ν1άε_μελα2ν1άε_μελα2ν1αέ_μελα2ν1αέ_μελα2ν1αθ_νεώ2σ1οικ_νεώ2σ1οικ_νεώ2ϲ1οικ_νεώ2ϲ1οικ_νεω2σ1οίκ_νεω2σ1οίκ_νεω2ϲ1οίκ_νεω2ϲ1οίκοὕ2σ1τιναςοὕ2ϲ1τιναϲἡτι2σ1οῦν_ἡτι2ϲ1οῦν_οὐδενό2σ1ωοὐδενό2σ1ωοὐδενό2ϲ1ωοὐδενό2ϲ1ωοὐδενο2σ1ώοὐδενο2σ1ώοὐδενο2ϲ1ώοὐδενο2ϲ1ώ_πα3ν2οῖς__πα3ν2οῖϲ__πα3ν2οῖσ__πα3ν2ούς__πα3ν2ούς__πα3ν2ούϲ__πα3ν2ούϲ__πα3ν2οὺς__πα3ν2οὺϲ__πα3ν2ούσ__πα3ν2ούσ__πα3ν2οὺσ__παρε2κ1τρ_παρε2ν1εῖπαρέ3ξ2ει_παρέ3ξ2ει__προσει2σ1_προϲει2ϲ1_προ4σ3θιγ_προ4ϲ3θιγ_πρό3σ2κοπ_πρό3σ2κοπ_πρό3ϲ2κοπ_πρό3ϲ2κοπ_προ3σ2κόπ_προ3σ2κόπ_προ3ϲ2κόπ_προ3ϲ2κόπ_προ3σ2τασ_προ3ϲ2ταϲ_προ3σ2τάτ_προ3σ2τάτ_προ3ϲ2τάτ_προ3ϲ2τάτ_προ3σ2τατ_προ3ϲ2τατ_προ3σ2ταυ_προ3ϲ2ταυ_προ3σ2τεί_προ3σ2τεί_προ3ϲ2τεί_προ3ϲ2τεί_προ3σ2τεν_προ3ϲ2τεν_προ3σ2τέν_προ3σ2τέν_προ3ϲ2τέν_προ3ϲ2τέν_προ3σ2τήσ_προ3σ2τήσ_προ3ϲ2τήϲ_προ3ϲ2τήϲ_προ3σ2τόμ_προ3σ2τόμ_προ3ϲ2τόμ_προ3ϲ2τόμ_προ3σ2τομ_προ3ϲ2τομ_προ3σ2φάζ_προ3σ2φάζ_προ3ϲ2φάζ_προ3ϲ2φάζ_πρό3σ2χημ_πρό3σ2χημ_πρό3ϲ2χημ_πρό3ϲ2χημ_προ3σ2χήμ_προ3σ2χήμ_προ3ϲ2χήμ_προ3ϲ2χήμ_προϋπε2ξ1_πυ2ρ1ήνεμ_πυ2ρ1ήνεμ_πυ2ρ1ηνέμ_πυ2ρ1ηνέμ_σελα2σ1φό_σελα2σ1φό_ϲελα2ϲ1φό_ϲελα2ϲ1φό_σελα2σ1φο_ϲελα2ϲ1φο_συνδιέ2ξ1_συνδιέ2ξ1_ϲυνδιέ2ξ1_ϲυνδιέ2ξ1_συνδιε2ξ1_ϲυνδιε2ξ1ὑπέ3ρ2αις_ὑπέ3ρ2αις_ὑπέ3ρ2αιϲ_ὑπέ3ρ2αιϲ_ὑπέ3ρ2αισ_ὑπέ3ρ2αισ_ὑπερε2κ1τεὑπερε2κ1τίὑπερε2κ1τίὑπε3ρ2εῖς_ὑπε3ρ2εῖϲ_ὑπε3ρ2εῖσ_ὡ2σ1αύτως_ὡ2σ1αύτως_ὡ2ϲ1αύτωϲ_ὡ2ϲ1αύτωϲ_ὡ2σ1αύτωσ_ὡ2σ1αύτωσ_ι2σ1χίλια_ι2σ1χίλια_ι2ϲ1χίλια_ι2ϲ1χίλια_ι2σ1μύρια_ι2σ1μύρια_ι2ϲ1μύρια_ι2ϲ1μύρια_",
        11: "ἀ2ν1εί2σ1ακἀ2ν1εί2σ1ακἀ2ν1εί2ϲ1ακἀ2ν1εί2ϲ1ακἀ2ν1ει2σ1άκἀ2ν1ει2σ1άκἀ2ν1ει2ϲ1άκἀ2ν1ει2ϲ1άκἀ4ν3έ2κ1τιτἀ4ν3έ2κ1τιτἀ4ν3ε2κ1τίτἀ4ν3ε2κ1τίτἀ3ν2ε3ξ2ίκαἀ3ν2ε3ξ2ίκαἀ3ν2ε3ξ2ικάἀ3ν2ε3ξ2ικάἀ2ν1ερεύνητἀ2ν1ερεύνητἀ2ν1ερευνήτἀ2ν1ερευνήτἀ2ν1ευφήμητἀ2ν1ευφήμητἀ2ν1ευφημήτἀ2ν1ευφημήτἀ2ν1ήλατος_ἀ2ν1ήλατος_ἀ2ν1ήλατοϲ_ἀ2ν1ήλατοϲ_ἀ2ν1ήλατοσ_ἀ2ν1ήλατοσ_ἀ2ν1ήλατον_ἀ2ν1ήλατον_ἀντιπαρε2κ1ἀντιπαρε2ξ1_διαμφι2σ1β_διαμφι2ϲ1βδύ3σ2ουσιν_δύ3σ2ουσιν_δύ3ϲ2ουϲιν_δύ3ϲ2ουϲιν_δύ3σ2οιτον_δύ3σ2οιτον_δύ3ϲ2οιτον_δύ3ϲ2οιτον_δυ3σ2οίτην_δυ3σ2οίτην_δυ3ϲ2οίτην_δυ3ϲ2οίτην_δύ3σ2οιμεν_δύ3σ2οιμεν_δύ3ϲ2οιμεν_δύ3ϲ2οιμεν_δύ3σ2αιτον_δύ3σ2αιτον_δύ3ϲ2αιτον_δύ3ϲ2αιτον_δυ3σ2αίτην_δυ3σ2αίτην_δυ3ϲ2αίτην_δυ3ϲ2αίτην_δύ3σ2αιμεν_δύ3σ2αιμεν_δύ3ϲ2αιμεν_δύ3ϲ2αιμεν_δυ3σ2άντων_δυ3σ2άντων_δυ3ϲ2άντων_δυ3ϲ2άντων_δυ3σ2όμεθα_δυ3σ2όμεθα_δυ3ϲ2όμεθα_δυ3ϲ2όμεθα_δύ3σ2ονται_δύ3σ2ονται_δύ3ϲ2ονται_δύ3ϲ2ονται_δυ3σ2οίμην_δυ3σ2οίμην_δυ3ϲ2οίμην_δυ3ϲ2οίμην_δύ3σ2οισθε_δύ3σ2οισθε_δύ3ϲ2οιϲθε_δύ3ϲ2οιϲθε_δύ3σ2οιντο_δύ3σ2οιντο_δύ3ϲ2οιντο_δύ3ϲ2οιντο_δύ3σ2εσθαι_δύ3σ2εσθαι_δύ3ϲ2εϲθαι_δύ3ϲ2εϲθαι_δυ3σ2αίμην_δυ3σ2αίμην_δυ3ϲ2αίμην_δυ3ϲ2αίμην_δύ3σ2αιντο_δύ3σ2αιντο_δύ3ϲ2αιντο_δύ3ϲ2αιντο_δύ3σ2ασθον_δύ3σ2ασθον_δύ3ϲ2αϲθον_δύ3ϲ2αϲθον_δυ3σ2άσθων_δυ3σ2άσθων_δυ3ϲ2άϲθων_δυ3ϲ2άϲθων_δύ3σ2ασθαι_δύ3σ2ασθαι_δύ3ϲ2αϲθαι_δύ3ϲ2αϲθαι_εἴ3σ2εσθον_εἴ3ϲ2εϲθον_εἴ3σ2οισθονεἴ3ϲ2οιϲθονεἰ3σ2οίσθηνεἰ3σ2οίσθηνεἰ3ϲ2οίϲθηνεἰ3ϲ2οίϲθηνεἰ3σ2οίμεθαεἰ3σ2οίμεθαεἰ3ϲ2οίμεθαεἰ3ϲ2οίμεθαεἴ3σ2αισθονεἴ3ϲ2αιϲθονεἴ3σ2αίσθηνεἴ3σ2αίσθηνεἴ3ϲ2αίϲθηνεἴ3ϲ2αίϲθηνεἰ3σ2αίμεθαεἰ3σ2αίμεθαεἰ3ϲ2αίμεθαεἰ3ϲ2αίμεθαἐ2κ1τύποις_ἐ2κ1τύποις_ἐ2κ1τύποιϲ_ἐ2κ1τύποιϲ_ἐ2κ1τύποισ_ἐ2κ1τύποισ_ἐ2κ1τύπους_ἐ2κ1τύπους_ἐ2κ1τύπουϲ_ἐ2κ1τύπουϲ_ἐ2κ1τύπουσ_ἐ2κ1τύπουσ__μελα2ν1αιγ_μελα2ν1αυγ_μελα2ν1είμ_μελα2ν1είμ_μελα2ν1εῖμ_μελά2ν1ιππ_μελά2ν1ιππ_μελα2ν1ίππ_μελα2ν1ίππ_μελα2ν1όμμ_μελα2ν1όμμ_μελα2ν1ομμ_μελά2ν1οσσ_μελά2ν1οσσ_μελά2ν1οϲϲ_μελά2ν1οϲϲ_μελα2ν1όσσ_μελα2ν1όσσ_μελα2ν1όϲϲ_μελα2ν1όϲϲ_μελά2ν1οστ_μελά2ν1οστ_μελά2ν1οϲτ_μελά2ν1οϲτ_μελα2ν1όστ_μελα2ν1όστ_μελα2ν1όϲτ_μελα2ν1όϲτ_μελά2ν1ουρ_μελά2ν1ουρ_μελα2ν1ούρ_μελα2ν1ούρ_μελα2ν1ουρ_παρα2ν1ίσχ_παρα2ν1ίσχ_παρα2ν1ίϲχ_παρα2ν1ίϲχπαρέ3ξ2εις_παρέ3ξ2εις_παρέ3ξ2ειϲ_παρέ3ξ2ειϲ_παρέ3ξ2εισ_παρέ3ξ2εισ_παρέ3ξ2ετε_παρέ3ξ2ετε_παρέ3ξ2ομαιπαρέ3ξ2ομαι_προ3σ2έσει_προ3σ2έσει_προ3ϲ2έϲει_προ3ϲ2έϲει_προ3σ2εσεί_προ3σ2εσεί_προ3ϲ2εϲεί_προ3ϲ2εϲεί_προ3σ2τερν_προ3ϲ2τερν_πρό3σ2τερν_πρό3σ2τερν_πρό3ϲ2τερν_πρό3ϲ2τερν_προ3σ2τέρν_προ3σ2τέρν_προ3ϲ2τέρν_προ3ϲ2τέρν_προ3σ2υ2ν1_προ3ϲ2υ2ν1_πρό3σ2φαγμ_πρό3σ2φαγμ_πρό3ϲ2φαγμ_πρό3ϲ2φαγμ_προ3σ2φάγμ_προ3σ2φάγμ_προ3ϲ2φάγμ_προ3ϲ2φάγμ_προ3σ2φάττ_προ3σ2φάττ_προ3ϲ2φάττ_προ3ϲ2φάττὡ2σ1α2ν1εί_ὡ2σ1α2ν1εί_ὡ2ϲ1α2ν1εί_ὡ2ϲ1α2ν1εί_ὡ2σ1α2ν1εὶ_ὡ2ϲ1α2ν1εὶ_ι2σ1χίλιοι_ι2σ1χίλιοι_ι2ϲ1χίλιοι_ι2ϲ1χίλιοι_ι2σ1χιλίων_ι2σ1χιλίων_ι2ϲ1χιλίων_ι2ϲ1χιλίων_ι2σ1χίλιαι_ι2σ1χίλιαι_ι2ϲ1χίλιαι_ι2ϲ1χίλιαι_ι2σ1χιλίας_ι2σ1χιλίας_ι2ϲ1χιλίαϲ_ι2ϲ1χιλίαϲ_ι2σ1χιλίασ_ι2σ1χιλίασ_ι2σ1μύριοι_ι2σ1μύριοι_ι2ϲ1μύριοι_ι2ϲ1μύριοι_ι2σ1μυρίων_ι2σ1μυρίων_ι2ϲ1μυρίων_ι2ϲ1μυρίων_ι2σ1μύριαι_ι2σ1μύριαι_ι2ϲ1μύριαι_ι2ϲ1μύριαι_ι2σ1μυρίας_ι2σ1μυρίας_ι2ϲ1μυρίαϲ_ι2ϲ1μυρίαϲ_ι2σ1μυρίασ_ι2σ1μυρίασ_ι2σ1χιλιοστι2ϲ1χιλιοϲτι2σ1μυριοστι2ϲ1μυριοϲτ",
        12: "ἀ2ν1ει2σ1φορἀ2ν1ει2ϲ1φορἀ2ν1εί2σ1φορἀ2ν1εί2σ1φορἀ2ν1εί2ϲ1φορἀ2ν1εί2ϲ1φορἀ2ν1ει2σ1φόρἀ2ν1ει2σ1φόρἀ2ν1ει2ϲ1φόρἀ2ν1ει2ϲ1φόρἀντιπροσ3κ2υἀντιπροϲ3κ2υδύ3σ2οισθον_δύ3σ2οισθον_δύ3ϲ2οιϲθον_δύ3ϲ2οιϲθον_δυ3σ2οίσθην_δυ3σ2οίσθην_δυ3ϲ2οίϲθην_δυ3ϲ2οίϲθην_δυ3σ2οίμεθα_δυ3σ2οίμεθα_δυ3ϲ2οίμεθα_δυ3ϲ2οίμεθα_δύ3σ2αισθον_δύ3σ2αισθον_δύ3ϲ2αιϲθον_δύ3ϲ2αιϲθον_δυ3σ2αίσθην_δυ3σ2αίσθην_δυ3ϲ2αίϲθην_δυ3ϲ2αίϲθην_δυ3σ2αίμεθα_δυ3σ2αίμεθα_δυ3ϲ2αίμεθα_δυ3ϲ2αίμεθα_δύ3σ2αισθαι_δύ3σ2αισθαι_δύ3ϲ2αιϲθαι_δύ3ϲ2αιϲθαι_ἐπεί3σ2ατον_ἐπεί3σ2ατον_ἐπεί3ϲ2ατον_ἐπεί3ϲ2ατον_ἐπει3σ2άτην_ἐπει3σ2άτην_ἐπει3ϲ2άτην_ἐπει3ϲ2άτην_ἐπεί3σ2αμεν_ἐπεί3σ2αμεν_ἐπεί3ϲ2αμεν_ἐπεί3ϲ2αμεν_ἐπει3σ2άμην_ἐπει3σ2άμην_ἐπει3ϲ2άμην_ἐπει3ϲ2άμην_ἐπεί3σ2ασθε_ἐπεί3σ2ασθε_ἐπεί3ϲ2αϲθε_ἐπεί3ϲ2αϲθε_ἐπεί3σ2αντο_ἐπεί3σ2αντο_ἐπεί3ϲ2αντο_ἐπεί3ϲ2αντο__θεοι2σ1εχθρ_θεοι2ϲ1εχθρ_καταδυ2σ1ωπ_καταδυ2ϲ1ωπ_κατεδυ2σ1ώπ_κατεδυ2σ1ώπ_κατεδυ2ϲ1ώπ_κατεδυ2ϲ1ώππαρέ3ξ2ετον_παρέ3ξ2ετον_παρε3ξ2έτην_παρε3ξ2έτην_παρέ3ξ2ομεν_παρέ3ξ2ομεν_παρέ3ξ2ουσι_παρέ3ξ2ουσι_παρέ3ξ2ουϲι_παρέ3ξ2ουϲι_παρέ3ξ2εται_παρέ3ξ2εται_παρέ3ξ2εσθε_παρέ3ξ2εσθε_παρέ3ξ2εϲθε_παρέ3ξ2εϲθε__πρό3σ2ωθεν__πρό3σ2ωθεν__πρό3ϲ2ωθεν__πρό3ϲ2ωθεν__συμπαρει2σ1_ϲυμπαρει2ϲ1_τεσσαρε2σ1κ_τεϲϲαρε2ϲ1κ_χαρι2σ1ανδρ_χαρι2ϲ1ανδρ_χαρι2σ1άνδρ_χαρι2σ1άνδρ_χαρι2ϲ1άνδρ_χαρι2ϲ1άνδρὡ2σ1πε2ρ1εί_ὡ2σ1πε2ρ1εί_ὡ2ϲ1πε2ρ1εί_ὡ2ϲ1πε2ρ1εί_ὡ2σ1πε2ρ1εὶ_ὡ2ϲ1πε2ρ1εὶ_ι2σ1χιλίοις_ι2σ1χιλίοις_ι2ϲ1χιλίοιϲ_ι2ϲ1χιλίοιϲ_ι2σ1χιλίοισ_ι2σ1χιλίοισ_ι2σ1χιλίους_ι2σ1χιλίους_ι2ϲ1χιλίουϲ_ι2ϲ1χιλίουϲ_ι2σ1χιλίουσ_ι2σ1χιλίουσ_ι2σ1χιλίαις_ι2σ1χιλίαις_ι2ϲ1χιλίαιϲ_ι2ϲ1χιλίαιϲ_ι2σ1χιλίαισ_ι2σ1χιλίαισ_ι2σ1μυρίοις_ι2σ1μυρίοις_ι2ϲ1μυρίοιϲ_ι2ϲ1μυρίοιϲ_ι2σ1μυρίοισ_ι2σ1μυρίοισ_ι2σ1μυρίους_ι2σ1μυρίους_ι2ϲ1μυρίουϲ_ι2ϲ1μυρίουϲ_ι2σ1μυρίουσ_ι2σ1μυρίουσ_ι2σ1μυρίαις_ι2σ1μυρίαις_ι2ϲ1μυρίαιϲ_ι2ϲ1μυρίαιϲ_ι2σ1μυρίαισ_ι2σ1μυρίαισ_",
        13: "ἀ2ν1ερυθρίαστἀ2ν1ερυθρίαστἀ2ν1ερυθρίαϲτἀ2ν1ερυθρίαϲτἀ2ν1ερυθριάστἀ2ν1ερυθριάστἀ2ν1ερυθριάϲτἀ2ν1ερυθριάϲτἐπεί3σ2ασθον_ἐπεί3σ2ασθον_ἐπεί3ϲ2αϲθον_ἐπεί3ϲ2αϲθον_ἐπει3σ2άμεθα_ἐπει3σ2άμεθα_ἐπει3ϲ2άμεθα_ἐπει3ϲ2άμεθα__κατε2ξ1α2ν1ί_κατε2ξ1α2ν1ίὁ2σ1τι2σ1οῦν_ὁ2ϲ1τι2ϲ1οῦν_παρέ3ξ2εσθον_παρέ3ξ2εσθον_παρέ3ξ2εϲθον_παρέ3ξ2εϲθον_παρε3ξ2όμεθα_παρε3ξ2όμεθα_παρέ3ξ2ονται_παρέ3ξ2ονται_ι2σ1χιλιάκις_ι2σ1χιλιάκις_ι2ϲ1χιλιάκιϲ_ι2ϲ1χιλιάκιϲ_ι2σ1χιλιάκισ_ι2σ1χιλιάκισ_ι2σ1μυριάκις_ι2σ1μυριάκις_ι2ϲ1μυριάκιϲ_ι2ϲ1μυριάκιϲ_ι2σ1μυριάκισ_ι2σ1μυριάκισ_",
        14: "_κατε2ξ1α2ν1έσ_κατε2ξ1α2ν1έσ_κατε2ξ1α2ν1έϲ_κατε2ξ1α2ν1έϲ",
        20: "ὁποιου2σ1τινα2σ1οῦν_ὁποιου2ϲ1τινα2ϲ1οῦν_"
    },
    patternChars: "'_ʼΐάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϲἀἁἂἃἄἅἆἇἐἑἒἓἔἕἠἡἢἣἤἥἦἧἰἱἲἳἴἵἶἷὀὁὂὃὄὅὐὑὒὓὔὕὖὗὠὡὢὣὤὥὦὧὰάὲέὴήὶίὸόὺύὼώᾀᾁᾂᾃᾄᾅᾆᾇᾐᾑᾒᾓᾔᾕᾖᾗᾠᾡᾢᾣᾤᾥᾦᾧᾲᾳᾴᾶᾷ᾽᾿ῂῃῄῆῇῒΐῖῗῢΰῤῥῦῧῲῳῴῶῷ’",
    patternArrayLength: 673082,
    valueStoreLength: 19638
};
