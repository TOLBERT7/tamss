import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'electricite',
    title: 'Électricité',
    description: 'Installations électriques, dépannages et mises aux normes pour particuliers et professionnels.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.8a7.14 7.14 0 0 0 2.5-2.8M4 4v2a4 4 0 0 0 4 4h3M12 16.8V7.2M20 20H4M12 20v-3.3"/><path d="M12 12h0"/></svg>',
    image: 'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg',
    detailedDescription: `
      <p>Notre équipe d'électriciens qualifiés propose une gamme complète de services électriques pour répondre à tous vos besoins.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos services électriques incluent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Installation électrique complète pour nouvelles constructions</li>
        <li>Rénovation et mise aux normes d'installations existantes</li>
        <li>Dépannage d'urgence 24h/24 et 7j/7</li>
        <li>Installation de tableaux électriques</li>
        <li>Pose de prises et interrupteurs</li>
        <li>Éclairage intérieur et extérieur</li>
        <li>Systèmes de sécurité (alarmes, détecteurs)</li>
        <li>Solutions d'économie d'énergie</li>
      </ul>
      
      <p>Tous nos travaux sont réalisés dans le respect des normes de sécurité en vigueur, garantissant des installations fiables et sécurisées.</p>
    `
  },
  {
    id: 'jardinage',
    title: 'Jardinage',
    description: 'Entretien, aménagement et création d\'espaces verts pour embellir votre extérieur.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 15V9"/><rect x="8" y="9" width="14" height="6" rx="2"/><path d="M8 15c0 3.5-2 6-2 6H4s-2-2.5-2-6c0-3.5 2-6 3-6s3 2.5 3 6z"/></svg>',
    image: '/jardinage2.jpg',
    detailedDescription: `
      <p>Envie de sublimer votre jardin ? Nos experts en jardinage vous proposent des solutions sur mesure pour créer et entretenir des espaces verts magnifiques.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos services de jardinage comprennent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Conception et aménagement de jardins</li>
        <li>Entretien régulier (tonte, taille, désherbage)</li>
        <li>Plantation d'arbres, arbustes et fleurs</li>
        <li>Installation de systèmes d'irrigation</li>
        <li>Traitement des pelouses et des plantes</li>
        <li>Création de massifs et bordures</li>
        <li>Élagage et abattage d'arbres</li>
        <li>Conseils personnalisés pour l'entretien de votre jardin</li>
      </ul>
      
      <p>Que vous souhaitiez un entretien régulier ou un projet d'aménagement complet, notre équipe de jardiniers passionnés saura répondre à vos attentes avec professionnalisme et créativité.</p>
    `
  },
  {
    id: 'briques-eco',
    title: 'Briques Éco',
    description: 'Solutions de construction écologiques et durables avec des matériaux respectueux de l\'environnement.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
    image: '/briques.jpg',
    detailedDescription: `
      <p>TAMSE s'engage dans une démarche écologique en proposant des solutions de construction durables avec nos briques écologiques innovantes.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Avantages de nos briques écologiques :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Matériaux recyclés et/ou recyclables</li>
        <li>Empreinte carbone réduite</li>
        <li>Excellente isolation thermique et acoustique</li>
        <li>Résistance supérieure aux intempéries</li>
        <li>Durabilité exceptionnelle</li>
        <li>Prix compétitifs</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos services incluent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Conseil et étude de faisabilité pour vos projets</li>
        <li>Fourniture de briques écologiques</li>
        <li>Construction de murs et structures</li>
        <li>Rénovation écologique de bâtiments existants</li>
        <li>Formation aux techniques de construction écologique</li>
      </ul>
      
      <p>Optez pour une construction respectueuse de l'environnement sans compromettre la qualité et l'esthétique de votre projet.</p>
    `
  },
  {
    id: 'climatisation',
    title: 'Climatisation',
    description: 'Installation, entretien et réparation de systèmes de climatisation pour votre confort toute l\'année.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5v14"/><path d="M5 15h14"/><path d="M9 9h6"/><path d="M9 19h6"/></svg>',
    image: '/climatisation.jpg',
    detailedDescription: `
      <p>Nos experts en climatisation vous offrent des solutions complètes pour garantir votre confort thermique tout au long de l'année.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos services de climatisation comprennent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Étude et dimensionnement de système adapté à vos besoins</li>
        <li>Installation de climatiseurs (split, multi-split, gainables)</li>
        <li>Pose de pompes à chaleur air/air et air/eau</li>
        <li>Entretien préventif et nettoyage des systèmes existants</li>
        <li>Diagnostic et réparation de pannes</li>
        <li>Remplacement de systèmes obsolètes</li>
        <li>Solutions connectées pour le contrôle à distance</li>
        <li>Conseils pour optimiser la consommation énergétique</li>
      </ul>
      
      <p>Nous travaillons avec les meilleures marques du marché pour vous garantir des installations performantes, économiques et respectueuses de l'environnement. Nos techniciens certifiés assurent un travail soigné et conforme aux normes en vigueur.</p>
    `
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage',
    description: 'Services de nettoyage professionnel pour particuliers et entreprises, adaptés à tous types de locaux.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 4-4"/><path d="m10 5-8 8"/><path d="m5 10-4 4"/><path d="m10 5 8 8"/><path d="m14 9 4-4"/><path d="m5 19 14-14"/><rect width="4" height="6" x="15" y="15" rx="2"/></svg>',
    image: '/nettoyage.jpg',
    // image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg',
    detailedDescription: `
      <p>TAMSE propose des services de nettoyage professionnel adaptés à tous types de locaux et à toutes exigences, pour les particuliers comme pour les entreprises.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos prestations de nettoyage incluent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Nettoyage régulier ou ponctuel de bureaux et locaux commerciaux</li>
        <li>Entretien d'immeubles et parties communes</li>
        <li>Nettoyage de fin de chantier</li>
        <li>Remise en état après travaux ou déménagement</li>
        <li>Lavage de vitres et façades</li>
        <li>Nettoyage en profondeur de sanitaires</li>
        <li>Désinfection de locaux</li>
        <li>Nettoyage industriel</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos engagements :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Personnel formé et qualifié</li>
        <li>Produits professionnels et écologiques</li>
        <li>Équipements modernes et performants</li>
        <li>Horaires adaptés à vos contraintes</li>
        <li>Suivi qualité rigoureux</li>
      </ul>
      
      <p>Nous établissons avec vous un plan de nettoyage personnalisé en fonction de vos besoins spécifiques et de votre budget.</p>
    `
  },
  {
    id: 'gestion-immobiliere',
    title: 'Gestion Immobilière',
    description: 'Solutions complètes de gestion de biens immobiliers pour propriétaires et investisseurs.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"/><path d="M11 12h2"/><rect width="16" height="4" x="4" y="5" rx="1"/></svg>',
    image: '/immobilier.jpg',
    detailedDescription: `
      <p>Notre service de gestion immobilière offre aux propriétaires et investisseurs une solution complète pour la gestion de leurs biens, leur permettant de se libérer des contraintes administratives et techniques.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Nos services de gestion immobilière comprennent :</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Recherche et sélection de locataires</li>
        <li>Rédaction de baux et état des lieux</li>
        <li>Collecte des loyers et gestion des impayés</li>
        <li>Suivi comptable et répartition des charges</li>
        <li>Gestion technique des biens (entretien, réparations)</li>
        <li>Coordination avec les syndics de copropriété</li>
        <li>Conseil fiscal et optimisation des investissements</li>
        <li>Représentation du propriétaire auprès des administrations</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Pourquoi choisir TAMSE pour la gestion de vos biens ?</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Équipe expérimentée et professionnelle</li>
        <li>Connaissance approfondie du marché local</li>
        <li>Transparence dans la gestion et reporting régulier</li>
        <li>Réactivité face aux problèmes et demandes des locataires</li>
        <li>Approche personnalisée adaptée à chaque bien et propriétaire</li>
      </ul>
      
      <p>Confiez-nous la gestion de vos biens immobiliers et profitez de votre investissement en toute sérénité.</p>
    `
  }
];