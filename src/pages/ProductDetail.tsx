import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Star, Shield, Zap, Award, CheckCircle, Info, Wrench, Package, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
import professionalKitchenEquipment from '@/assets/professional-kitchen-equipment.jpg';
import blastChiller from '@/assets/blast-chiller.jpg';
import commercialRefrigeration from '@/assets/commercial-refrigeration.jpg';
import displayCabinets from '@/assets/display-cabinets.jpg';
import OneDoorCabinet from '@/assets/RC_OneFoorFV.png';
import sOneDoorCabinet from '@/assets/RC_OneFoorSV.png';

const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Product images slideshow
  const productImages = [OneDoorCabinet, sOneDoorCabinet, blastChiller, commercialRefrigeration, displayCabinets];

  // Auto-cycle through images every 3 seconds (pause when modal is open or hovered)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!isModalOpen && !isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % productImages.length);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [productImages.length, isModalOpen, isHovered]);

  // Modal navigation functions
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  // This would typically come from an API or database
  const products = [{
    id: 1,
    name: 'One Door Cabinet',
    image: OneDoorCabinet,
    price: '1,10,000',
    description: 'Pre-fabricated walk-in cooler with insulated panels',
    features: ['Digital temperature control', 'Steam injection system', '6 rack capacity', 'Energy efficient'],
    category: 'Refrigerated Cabinets',
    badge: 'Best Seller',
    specifications: {
      dimensions: '36" W x 30" D x 42" H',
      weight: '450 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '6 full-size sheet pans',
      temperature: '200°F - 500°F'
    },
    overview: {
      description: 'Our Commercial Refrigeration Cabinets are engineered to meet the rigorous demands of modern professional kitchens. Designed for both efficiency and durability, these cabinets provide reliable temperature control, optimal storage conditions, and user-friendly operation — all within a sleek, stainless steel design.',
      keyBenefits: ['Energy-efficient compressor ensures powerful cooling with lower operating costs', 'Automatic defrost keeps the system running at peak performance', 'Durable stainless steel construction for a hygienic, long-lasting finish', 'Digital controls with display for precise temperature management', 'Top-mounted ventilation ideal for enclosed or tight kitchen spaces']
    },
    design: {
      description: 'Crafted with both functionality and aesthetics in mind, this convection oven features a sleek stainless steel exterior that complements any professional kitchen environment.',
      designFeatures: ['Removable anti-tilt tray slides provide safe and flexible storage options', 'Stainless steel interior and exterior for durability, hygiene, and a professional finish', 'UV-tinted, Low-E double-pane glass door minimizes heat transfer and protects contents.', 'Top-mounted ventilation system maximizes cooling efficiency in tight or enclosed spaces', 'Adjustable legs ensure stability and level installation on uneven floors']
    },
    materials: {
      description: 'Built to withstand the rigors of commercial use, every component is selected for durability, food safety, and easy maintenance.',
      materialSpecs: ['Type 304 stainless steel interior and exterior', 'Aluminized steel oven chamber', 'High-temperature ceramic fiber insulation', 'Tempered glass viewing windows', 'Food-grade silicone door seals']
    },
    performance: {
      description: 'Engineered for exceptional performance in demanding commercial environments, delivering consistent results while maintaining energy efficiency.',
      performanceMetrics: ['Heat-up time: 15 minutes to 350°F', 'Temperature accuracy: ±5°F throughout chamber', 'Energy consumption: 15% below industry average', 'Production capacity: 120 loaves per hour', 'Recovery time: 3 minutes after door opening']
    }
  }, {
    id: 2,
    name: 'Commercial Gas Range',
    image: professionalKitchenEquipment,
    price: '$8,900',
    description: 'Professional 6-burner gas range with griddle and double oven',
    features: ['6 high-BTU burners', 'Built-in griddle', 'Double oven', 'Heavy-duty construction'],
    category: 'Ranges',
    badge: 'New',
    specifications: {
      dimensions: '60" W x 32" D x 36" H',
      weight: '680 lbs',
      power: 'Natural Gas / LP Gas',
      capacity: '2 standard ovens',
      btu: '32,000 BTU per burner'
    },
    overview: {
      description: 'This professional gas range combines power, precision, and versatility to meet the demands of busy commercial kitchens. With six high-BTU burners and dual ovens, it delivers exceptional cooking performance.',
      keyBenefits: ['High-BTU burners for rapid heating', 'Dual oven configuration for versatility', 'Built-in griddle for additional cooking surface', 'Heavy-duty construction for longevity', 'Easy-to-clean design reduces maintenance']
    },
    design: {
      description: 'Designed for professional kitchens where performance meets durability. The sleek design incorporates practical features that enhance workflow efficiency.',
      designFeatures: ['Professional stainless steel construction', 'Removable cast iron grates', 'Integrated grease management system', 'Pilot light safety system', 'Adjustable leveling legs']
    },
    materials: {
      description: 'Constructed with premium materials to ensure longevity and optimal performance in high-volume commercial operations.',
      materialSpecs: ['430 stainless steel exterior finish', 'Cast iron burner grates', 'Stainless steel oven interior', 'Porcelain enamel oven bottom', 'Heavy-gauge steel construction']
    },
    performance: {
      description: 'Engineered to deliver consistent, powerful performance that professional chefs demand, with energy-efficient operation.',
      performanceMetrics: ['Burner output: 32,000 BTU each', 'Oven temperature range: 250°F - 500°F', 'Recovery time: 2 minutes after door opening', 'Gas consumption: Optimized for efficiency', 'Simultaneous cooking capacity: 12+ items']
    }
  }, {
    id: 3,
    name: 'Walk-in Blast Freezer',
    image: commercialKitchen,
    price: '$25,000',
    description: 'Rapid freezing technology for preserving food quality',
    features: ['Blast freezing capability', 'Digital monitoring', 'Stainless steel interior', 'Energy efficient'],
    category: 'Freezing',
    specifications: {
      dimensions: '96" W x 96" D x 96" H',
      weight: '2,200 lbs',
      power: '460V, 3-phase, 60Hz',
      capacity: '500 cubic feet',
      temperature: '-40°F to 32°F'
    },
    overview: {
      description: 'Our Walk-in Blast Freezer provides rapid temperature reduction technology essential for maintaining food quality and safety in commercial operations.',
      keyBenefits: ['Rapid blast freezing preserves food quality', 'Digital monitoring ensures temperature control', 'Energy-efficient operation reduces costs', 'Stainless steel construction for hygiene', 'Large capacity for high-volume operations']
    },
    design: {
      description: 'Engineered for maximum efficiency and ease of use, this blast freezer features professional-grade construction and user-friendly controls.',
      designFeatures: ['Insulated walk-in design', 'Digital temperature display', 'Heavy-duty door hinges', 'Interior LED lighting', 'Emergency release system']
    },
    materials: {
      description: 'Built with premium materials to ensure optimal insulation, hygiene, and durability in demanding commercial environments.',
      materialSpecs: ['304 stainless steel interior walls', 'Polyurethane foam insulation', 'Galvanized steel exterior frame', 'Heavy-duty floor construction', 'Professional-grade door seals']
    },
    performance: {
      description: 'Designed to rapidly reduce product temperature while maintaining energy efficiency and reliability.',
      performanceMetrics: ['Blast freeze time: 90 minutes to -18°F', 'Temperature uniformity: ±2°F', 'Energy efficiency: 20% above standard', 'Defrost cycle: Automatic hot gas', 'Capacity: Up to 1,000 lbs per cycle']
    }
  }, {
    id: 4,
    name: 'Commercial Mixer 60Qt',
    image: professionalKitchenEquipment,
    price: '$3,500',
    description: 'Heavy-duty planetary mixer for high-volume production',
    features: ['60-quart capacity', 'Variable speed control', 'Bowl guard safety', 'Multiple attachments'],
    category: 'Mixers',
    specifications: {
      dimensions: '28" W x 41" D x 61" H',
      weight: '640 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '60 quarts',
      motor: '3 HP'
    },
    overview: {
      description: 'This commercial planetary mixer delivers exceptional mixing performance for bakeries, restaurants, and high-volume food production facilities.',
      keyBenefits: ['60-quart capacity for large batches', 'Variable speed control for precision', 'Heavy-duty construction for reliability', 'Multiple attachments for versatility', 'Safety features protect operators']
    },
    design: {
      description: 'Engineered for professional use with robust construction and intuitive controls that enhance productivity and safety.',
      designFeatures: ['Planetary mixing action', 'Bowl guard safety system', 'Variable speed transmission', 'Attachment hub for accessories', 'Emergency stop controls']
    },
    materials: {
      description: 'Constructed with food-grade materials and heavy-duty components to ensure longevity and food safety.',
      materialSpecs: ['Stainless steel mixing bowl', 'Cast iron transmission housing', 'Stainless steel attachments', 'Food-grade lubricants', 'Heavy-duty motor construction']
    },
    performance: {
      description: 'Delivers consistent mixing results with powerful motor and precision speed control for professional applications.',
      performanceMetrics: ['Mixing speeds: 65, 125, 190 RPM', 'Dough capacity: 50 lbs', 'Whip capacity: 38 egg whites', 'Motor power: 3 HP', 'Duty cycle: Continuous operation']
    }
  }, {
    id: 5,
    name: 'Combi Steamer Oven',
    image: commercialKitchen,
    price: '$18,500',
    description: 'Multi-function cooking with steam and convection capabilities',
    features: ['Steam and convection modes', 'Programmable recipes', 'Water filtration', 'Self-cleaning'],
    category: 'Ovens',
    badge: 'Best Seller',
    specifications: {
      dimensions: '31" W x 28" D x 44" H',
      weight: '350 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '10 full-size pans',
      temperature: '85°F - 482°F'
    },
    overview: {
      description: 'Our Combi Steamer Oven combines the benefits of convection cooking and steam injection for superior cooking results and versatility.',
      keyBenefits: ['Steam and convection combination cooking', 'Programmable recipe storage', 'Water filtration system included', 'Self-cleaning function saves time', 'Energy-efficient operation']
    },
    design: {
      description: 'Sophisticated design integrates multiple cooking methods in one compact unit, maximizing kitchen efficiency.',
      designFeatures: ['Digital touchscreen controls', 'Multi-point temperature probes', 'Automatic water filling', 'Double-paned glass door', 'Internal halogen lighting']
    },
    materials: {
      description: 'Premium materials ensure optimal performance, hygiene, and durability in demanding commercial environments.',
      materialSpecs: ['Stainless steel cooking chamber', 'Heat-resistant door glass', 'Food-grade water system', 'Corrosion-resistant components', 'Professional-grade insulation']
    },
    performance: {
      description: 'Delivers exceptional cooking results with precise temperature and humidity control for professional culinary applications.',
      performanceMetrics: ['Steam generation: 40 lbs/hour', 'Temperature accuracy: ±2°F', 'Humidity control: 0-100%', 'Heat-up time: 12 minutes', 'Energy rating: Energy Star certified']
    }
  }, {
    id: 6,
    name: 'Industrial Fryer Dual Basket',
    image: professionalKitchenEquipment,
    price: '$6,800',
    description: 'High-capacity dual basket fryer with oil filtration',
    features: ['Dual basket design', 'Oil filtration system', 'Digital controls', 'Energy efficient'],
    category: 'Fryers',
    specifications: {
      dimensions: '32" W x 34" D x 42" H',
      weight: '275 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '50 lbs oil per vat',
      btu: '120,000 BTU'
    },
    overview: {
      description: 'This industrial dual basket fryer delivers high-volume frying capacity with advanced filtration technology for superior food quality.',
      keyBenefits: ['Dual basket system for efficiency', 'Built-in oil filtration extends oil life', 'Digital temperature control for precision', 'Energy-efficient heating system', 'Easy cleaning and maintenance']
    },
    design: {
      description: 'Engineered for high-volume commercial operations with user-friendly controls and safety features.',
      designFeatures: ['Twin fry baskets with lift mechanism', 'Digital temperature display', 'Oil level indicator', 'Safety shut-off system', 'Removable heating elements']
    },
    materials: {
      description: 'Constructed with durable materials to withstand continuous use and high-temperature operations.',
      materialSpecs: ['Stainless steel fry tank', 'Cast iron burner system', 'Stainless steel exterior', 'Heat-resistant basket material', 'Professional-grade valves']
    },
    performance: {
      description: 'Delivers consistent frying results with rapid recovery time and energy-efficient operation.',
      performanceMetrics: ['Recovery time: 2.5 minutes', 'Oil capacity: 50 lbs per vat', 'Production rate: 75 lbs/hour', 'Temperature range: 200°F - 400°F', 'Filtration efficiency: 99.5%']
    }
  }, {
    id: 7,
    name: 'Commercial Dishwasher',
    image: commercialKitchen,
    price: '$4,200',
    description: 'High-temperature sanitizing dishwasher',
    features: ['High-temp sanitizing', 'Fast wash cycles', 'Chemical dispensing', 'Stainless construction'],
    category: 'Warewashing',
    specifications: {
      dimensions: '26" W x 26" D x 33" H',
      weight: '185 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '30 racks/hour',
      temperature: '180°F final rinse'
    },
    overview: {
      description: 'Our commercial dishwasher provides high-temperature sanitizing with fast cycle times for busy food service operations.',
      keyBenefits: ['High-temperature sanitizing kills bacteria', 'Fast wash cycles increase efficiency', 'Automatic chemical dispensing', 'Stainless steel construction', 'Energy-efficient operation']
    },
    design: {
      description: 'Compact design maximizes washing efficiency while fitting into tight kitchen spaces.',
      designFeatures: ['Single tank wash system', 'Built-in booster heater', 'Chemical pump system', 'Low water consumption design', 'Easy-load rack system']
    },
    materials: {
      description: 'Built with corrosion-resistant materials to ensure longevity in high-moisture environments.',
      materialSpecs: ['Stainless steel wash tank', 'Stainless steel door and frame', 'Stainless steel wash arms', 'Chemical-resistant seals', 'Heavy-duty pump components']
    },
    performance: {
      description: 'Engineered for high-volume washing with consistent sanitizing results and low operating costs.',
      performanceMetrics: ['Wash cycle: 90 seconds', 'Water usage: 0.7 gallons per rack', 'Final rinse temp: 180°F', 'Rack capacity: 30 per hour', 'Energy consumption: 3.2 kW']
    }
  }, {
    id: 8,
    name: 'Professional Food Processor',
    image: professionalKitchenEquipment,
    price: '$2,800',
    description: 'Heavy-duty food processor for prep work',
    features: ['Large capacity bowl', 'Multiple cutting discs', 'Variable speeds', 'Safety interlocks'],
    category: 'Food Prep',
    badge: 'New',
    specifications: {
      dimensions: '18" W x 21" D x 25" H',
      weight: '85 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '14-cup bowl',
      motor: '3 HP'
    },
    overview: {
      description: 'This professional food processor handles high-volume prep work with precision cutting and reliable performance.',
      keyBenefits: ['Large 14-cup capacity bowl', 'Multiple cutting disc options', 'Variable speed control', 'Safety interlock system', 'Heavy-duty motor construction']
    },
    design: {
      description: 'Engineered for commercial kitchens with focus on safety, efficiency, and ease of use.',
      designFeatures: ['Clear polycarbonate bowl', 'Magnetic safety system', 'Variable speed dial', 'Quick-release blade system', 'Non-slip base design']
    },
    materials: {
      description: 'Constructed with food-grade materials and commercial-grade components for durability.',
      materialSpecs: ['Stainless steel cutting blades', 'Polycarbonate processing bowl', 'Cast aluminum motor housing', 'Stainless steel disc blades', 'Food-grade rubber gaskets']
    },
    performance: {
      description: 'Delivers consistent processing results with powerful motor and precision cutting capabilities.',
      performanceMetrics: ['Motor power: 3 HP', 'Processing capacity: 14 cups', 'Speed range: 300-3,600 RPM', 'Duty cycle: 15 minutes continuous', 'Noise level: <85 dB']
    }
  }, {
    id: 9,
    name: 'Salamander Broiler',
    image: commercialKitchen,
    price: '$1,900',
    description: 'Overhead broiler for finishing and browning',
    features: ['Adjustable heat zones', 'Easy-clean design', 'Fast heating', 'Compact footprint'],
    category: 'Broilers',
    specifications: {
      dimensions: '36" W x 17" D x 18" H',
      weight: '115 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '36" cooking surface',
      btu: '28,000 BTU'
    },
    overview: {
      description: 'Our Salamander Broiler provides precise overhead heating for finishing dishes and browning to perfection.',
      keyBenefits: ['Adjustable heat zones for control', 'Fast heating for quick service', 'Easy-clean design saves time', 'Compact design saves space', 'Professional-grade construction']
    },
    design: {
      description: 'Compact overhead design maximizes kitchen space while providing professional browning capabilities.',
      designFeatures: ['Adjustable cooking grates', 'Removable drip tray', 'Independent heat controls', 'Wall or shelf mounting', 'Stainless steel construction']
    },
    materials: {
      description: 'Built with heat-resistant materials to ensure durability and easy maintenance.',
      materialSpecs: ['Stainless steel cooking grates', 'Stainless steel exterior', 'Cast iron burner system', 'Heat-resistant door glass', 'Removable grease tray']
    },
    performance: {
      description: 'Delivers consistent browning results with rapid heat-up time and precise temperature control.',
      performanceMetrics: ['Heat-up time: 5 minutes', 'Cooking surface: 36" x 15"', 'BTU output: 28,000', 'Temperature range: 250°F - 1,000°F', 'Recovery time: Instant']
    }
  }, {
    id: 10,
    name: 'Commercial Ice Machine',
    image: professionalKitchenEquipment,
    price: '$3,200',
    description: 'High-output ice machine with storage bin',
    features: ['500 lbs daily production', 'Self-cleaning cycle', 'Energy star rated', 'Antimicrobial protection'],
    category: 'Ice Equipment',
    specifications: {
      dimensions: '30" W x 24" D x 39" H',
      weight: '225 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '500 lbs/day',
      storage: '200 lbs'
    },
    overview: {
      description: 'This commercial ice machine delivers reliable ice production with energy-efficient operation and antimicrobial protection.',
      keyBenefits: ['High daily ice production capacity', 'Self-cleaning cycle reduces maintenance', 'Energy Star certified efficiency', 'Antimicrobial protection system', 'Reliable cube ice production']
    },
    design: {
      description: 'Engineered for continuous operation with user-friendly controls and space-efficient design.',
      designFeatures: ['Front-facing controls', 'Removable air filter', 'Self-diagnostic system', 'Insulated storage bin', 'Easy-access service panels']
    },
    materials: {
      description: 'Constructed with corrosion-resistant materials and food-safe components for reliable operation.',
      materialSpecs: ['Stainless steel evaporator', 'Antimicrobial plastic components', 'Stainless steel exterior panels', 'Food-grade water lines', 'Corrosion-resistant fittings']
    },
    performance: {
      description: 'Delivers consistent ice quality with energy-efficient operation and minimal maintenance requirements.',
      performanceMetrics: ['Ice production: 500 lbs/24 hours', 'Storage capacity: 200 lbs', 'Energy consumption: 8.5 kWh/100 lbs', 'Water usage: 21 gallons/100 lbs', 'Cycle time: 22 minutes']
    }
  }, {
    id: 11,
    name: 'Tilting Braising Pan',
    image: commercialKitchen,
    price: '$15,600',
    description: 'Versatile tilting pan for braising, searing, and sautéing',
    features: ['40-gallon capacity', 'Tilting mechanism', 'Precise temperature control', 'Easy pour spout'],
    category: 'Cooking Equipment',
    badge: 'Best Seller',
    specifications: {
      dimensions: '46" W x 34" D x 42" H',
      weight: '850 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '40 gallons',
      btu: '80,000 BTU'
    },
    overview: {
      description: 'Our tilting braising pan offers exceptional versatility for braising, searing, and sautéing in high-volume operations.',
      keyBenefits: ['Large 40-gallon cooking capacity', 'Tilting mechanism for easy serving', 'Precise temperature control system', 'Easy pour spout design', 'Versatile cooking applications']
    },
    design: {
      description: 'Engineered for professional kitchens with tilting capability and precise controls for various cooking methods.',
      designFeatures: ['Manual tilting mechanism', 'Thermostatic temperature control', 'Reinforced cooking surface', 'Safety lock system', 'Easy-clean design']
    },
    materials: {
      description: 'Built with heavy-duty materials to withstand intensive commercial use and high-temperature cooking.',
      materialSpecs: ['Stainless steel cooking surface', 'Cast iron burner assembly', 'Stainless steel exterior', 'Heavy-duty tilting mechanism', 'Professional-grade controls']
    },
    performance: {
      description: 'Delivers superior cooking results with even heat distribution and precise temperature control.',
      performanceMetrics: ['Cooking capacity: 40 gallons', 'Temperature range: 200°F - 400°F', 'BTU output: 80,000', 'Tilting angle: 90 degrees', 'Heat-up time: 20 minutes']
    }
  }, {
    id: 12,
    name: 'Commercial Griddle 48"',
    image: professionalKitchenEquipment,
    price: '$4,500',
    description: 'Large flat-top griddle for high-volume cooking',
    features: ['48-inch cooking surface', 'Thermostatic controls', 'Grease management', 'Even heat distribution'],
    category: 'Griddles',
    specifications: {
      dimensions: '48" W x 24" D x 15" H',
      weight: '320 lbs',
      power: 'Natural Gas / LP Gas',
      capacity: '48" x 24" surface',
      btu: '105,000 BTU'
    },
    overview: {
      description: 'This commercial griddle provides a large cooking surface with even heat distribution for high-volume food preparation.',
      keyBenefits: ['Large 48-inch cooking surface', 'Even heat distribution across surface', 'Thermostatic temperature controls', 'Efficient grease management system', 'Heavy-duty construction']
    },
    design: {
      description: 'Designed for maximum cooking efficiency with user-friendly controls and easy maintenance features.',
      designFeatures: ['Thermostatic zone controls', 'Removable grease drawer', 'Adjustable cooking zones', 'Stainless steel construction', 'Easy-clean surface']
    },
    materials: {
      description: 'Constructed with professional-grade materials for durability and optimal heat retention.',
      materialSpecs: ['1-inch thick steel cooking plate', 'Stainless steel exterior', 'Cast iron burner system', 'Stainless steel grease trough', 'Heavy-duty support structure']
    },
    performance: {
      description: 'Engineered for consistent cooking results with excellent heat retention and distribution.',
      performanceMetrics: ['Cooking surface: 48" x 24"', 'BTU output: 105,000', 'Temperature range: 200°F - 550°F', 'Recovery time: 5 minutes', 'Heat zones: 4 independent']
    }
  }, {
    id: 13,
    name: 'Vacuum Chamber Sealer',
    image: commercialKitchen,
    price: '$5,500',
    description: 'Professional vacuum sealing for food preservation',
    features: ['Chamber sealing technology', 'Digital controls', 'Multiple seal bars', 'Oil pump system'],
    category: 'Food Packaging',
    specifications: {
      dimensions: '20" W x 24" D x 18" H',
      weight: '110 lbs',
      power: '208V, single phase',
      capacity: '16" x 20" chamber',
      pump: 'Oil-filled rotary vane'
    },
    overview: {
      description: 'Our vacuum chamber sealer provides professional-grade food packaging with superior vacuum levels and reliable sealing.',
      keyBenefits: ['Chamber sealing technology', 'Digital control system', 'Multiple seal bar configuration', 'Oil pump system for consistency', 'Professional food packaging']
    },
    design: {
      description: 'Engineered for commercial food packaging with robust construction and precise controls.',
      designFeatures: ['Transparent chamber lid', 'Digital vacuum display', 'Programmable cycle controls', 'Multiple sealing positions', 'Easy-load chamber design']
    },
    materials: {
      description: 'Built with food-grade materials and commercial components for reliable vacuum sealing.',
      materialSpecs: ['Stainless steel chamber', 'Food-grade sealing bars', 'Tempered glass lid', 'Oil-filled vacuum pump', 'Heavy-duty electrical components']
    },
    performance: {
      description: 'Delivers consistent vacuum levels and reliable sealing for professional food preservation.',
      performanceMetrics: ['Vacuum level: 99.9%', 'Chamber size: 16" x 20" x 6"', 'Seal bar length: 16"', 'Cycle time: 20-40 seconds', 'Pump capacity: 21 CFM']
    }
  }, {
    id: 14,
    name: 'Commercial Smoker',
    image: professionalKitchenEquipment,
    price: '$8,200',
    description: 'Large capacity smoker for BBQ and specialty items',
    features: ['Digital temperature control', 'Multiple racks', 'Wood chip feeder', 'Insulated chamber'],
    category: 'Smoking Equipment',
    specifications: {
      dimensions: '42" W x 36" D x 72" H',
      weight: '650 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '12 full racks',
      temperature: '150°F - 300°F'
    },
    overview: {
      description: 'This commercial smoker delivers authentic BBQ flavors with precise temperature control and large cooking capacity.',
      keyBenefits: ['Large capacity for high volume', 'Digital temperature control system', 'Automatic wood chip feeding', 'Heavily insulated cooking chamber', 'Professional BBQ results']
    },
    design: {
      description: 'Engineered for professional BBQ operations with user-friendly controls and efficient design.',
      designFeatures: ['Digital control panel', 'Automatic wood feeder', 'Multiple rack positions', 'Insulated cooking chamber', 'External thermometer ports']
    },
    materials: {
      description: 'Constructed with heavy-duty materials for optimal heat retention and smoke circulation.',
      materialSpecs: ['Stainless steel cooking chamber', 'Heavy insulation package', 'Stainless steel racks', 'Cast iron fire box', 'Weather-resistant exterior']
    },
    performance: {
      description: 'Delivers consistent smoking results with precise temperature control and efficient smoke circulation.',
      performanceMetrics: ['Cooking capacity: 12 full racks', 'Temperature range: 150°F - 300°F', 'Temperature accuracy: ±5°F', 'Smoke generation: Automatic', 'Cooking time: Variable']
    }
  }, {
    id: 15,
    name: 'Pasta Cooker Station',
    image: commercialKitchen,
    price: '$3,800',
    description: 'Dedicated pasta cooking station with baskets',
    features: ['Multiple cooking baskets', 'Automatic lift system', 'Temperature control', 'Water level indicator'],
    category: 'Specialty Cooking',
    specifications: {
      dimensions: '24" W x 24" D x 36" H',
      weight: '185 lbs',
      power: 'Natural Gas / LP Gas',
      capacity: '6 pasta baskets',
      btu: '45,000 BTU'
    },
    overview: {
      description: 'Our pasta cooker station provides efficient pasta cooking with multiple baskets and automatic lift system.',
      keyBenefits: ['Multiple cooking basket capacity', 'Automatic basket lift system', 'Precise temperature control', 'Water level monitoring', 'Efficient pasta production']
    },
    design: {
      description: 'Designed specifically for pasta cooking with features that enhance speed and consistency.',
      designFeatures: ['Individual basket timers', 'Automatic lift mechanism', 'Water level indicator', 'Temperature gauge', 'Easy-drain system']
    },
    materials: {
      description: 'Built with food-grade stainless steel and commercial components for durability.',
      materialSpecs: ['Stainless steel cooking tank', 'Stainless steel baskets', 'Heavy-duty lift mechanism', 'Stainless steel exterior', 'Commercial-grade burners']
    },
    performance: {
      description: 'Engineered for high-volume pasta production with consistent cooking results.',
      performanceMetrics: ['Basket capacity: 6 individual', 'Water capacity: 15 gallons', 'BTU output: 45,000', 'Recovery time: 3 minutes', 'Production rate: 30 portions/hour']
    }
  }, {
    id: 16,
    name: 'Commercial Dough Sheeter',
    image: professionalKitchenEquipment,
    price: '$6,500',
    description: 'Precision dough rolling for bakery operations',
    features: ['Adjustable thickness', 'Reversible operation', 'Food-grade rollers', 'Safety guards'],
    category: 'Bakery Equipment',
    specifications: {
      dimensions: '52" W x 30" D x 42" H',
      weight: '485 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '20" roller width',
      motor: '2 HP'
    },
    overview: {
      description: 'This commercial dough sheeter provides precise dough rolling with adjustable thickness for consistent bakery products.',
      keyBenefits: ['Adjustable thickness settings', 'Reversible operation capability', 'Food-grade roller construction', 'Comprehensive safety features', 'Professional bakery results']
    },
    design: {
      description: 'Engineered for bakery operations with precision controls and safety features.',
      designFeatures: ['Adjustable roller gap', 'Reversible direction control', 'Emergency stop system', 'Removable safety guards', 'Easy-clean design']
    },
    materials: {
      description: 'Constructed with food-grade materials and precision-machined components.',
      materialSpecs: ['Stainless steel rollers', 'Food-grade belt system', 'Cast iron frame construction', 'Stainless steel guards', 'Heavy-duty motor housing']
    },
    performance: {
      description: 'Delivers consistent dough thickness with reliable operation for professional bakery use.',
      performanceMetrics: ['Roller width: 20 inches', 'Thickness range: 1-20mm', 'Belt speed: 15 ft/minute', 'Motor power: 2 HP', 'Production capacity: 200 lbs/hour']
    }
  }, {
    id: 17,
    name: 'Blast Chiller Cabinet',
    image: commercialKitchen,
    price: '$12,800',
    description: 'Rapid cooling technology for food safety',
    features: ['Blast chill and freeze modes', 'Core probe monitoring', 'Programmable cycles', 'HACCP compliance'],
    category: 'Cooling Equipment',
    badge: 'New',
    specifications: {
      dimensions: '32" W x 33" D x 77" H',
      weight: '485 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '15 full pans',
      temperature: '+160°F to -40°F'
    },
    overview: {
      description: 'Our blast chiller cabinet provides rapid temperature reduction for food safety compliance and quality preservation.',
      keyBenefits: ['Rapid blast chilling and freezing', 'Core probe temperature monitoring', 'Programmable cycle controls', 'HACCP compliance features', 'Food safety optimization']
    },
    design: {
      description: 'Engineered for food safety with advanced controls and monitoring systems.',
      designFeatures: ['Digital touchscreen controls', 'Core probe system', 'Programmable recipes', 'Data logging capability', 'Automatic defrost system']
    },
    materials: {
      description: 'Built with food-grade materials and professional cooling components.',
      materialSpecs: ['Stainless steel interior', 'Insulated cabinet construction', 'Food-grade gaskets', 'Stainless steel shelving', 'Professional refrigeration system']
    },
    performance: {
      description: 'Delivers rapid cooling performance with precise temperature control and monitoring.',
      performanceMetrics: ['Chill time: 90 minutes (+160°F to +37°F)', 'Freeze time: 240 minutes (+160°F to -0°F)', 'Capacity: 15 full-size pans', 'Temperature range: +160°F to -40°F', 'Data logging: 100 cycles']
    }
  }, {
    id: 18,
    name: 'Commercial Coffee Machine',
    image: professionalKitchenEquipment,
    price: '$4,800',
    description: 'Professional espresso machine for café service',
    features: ['Dual boiler system', 'Steam wands', 'Programmable shots', 'Cup warmer'],
    category: 'Beverage Equipment',
    specifications: {
      dimensions: '36" W x 22" D x 20" H',
      weight: '165 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '2 group heads',
      boiler: '15-liter capacity'
    },
    overview: {
      description: 'This commercial espresso machine delivers professional-quality coffee with dual boiler technology and programmable controls.',
      keyBenefits: ['Dual boiler system for consistency', 'Professional steam wands', 'Programmable shot controls', 'Built-in cup warming system', 'Commercial-grade performance']
    },
    design: {
      description: 'Designed for high-volume café operations with professional features and reliable performance.',
      designFeatures: ['Two group head configuration', 'Digital shot programming', 'Professional steam wands', 'Cup warming surface', 'Easy maintenance access']
    },
    materials: {
      description: 'Constructed with commercial-grade materials for durability and optimal coffee extraction.',
      materialSpecs: ['Stainless steel boilers', 'Brass group heads', 'Stainless steel exterior', 'Professional-grade pumps', 'Food-grade water lines']
    },
    performance: {
      description: 'Engineered for consistent espresso extraction with professional steaming capabilities.',
      performanceMetrics: ['Extraction pressure: 9 bars', 'Boiler capacity: 15 liters', 'Steam pressure: 1.5 bars', 'Shot volume: Programmable', 'Recovery time: 45 seconds']
    }
  }, {
    id: 19,
    name: 'Induction Cooktop Station',
    image: commercialKitchen,
    price: '$2,200',
    description: 'Energy-efficient induction cooking surface',
    features: ['Precise temperature control', 'Energy efficient', 'Easy to clean', 'Safety features'],
    category: 'Cooktops',
    specifications: {
      dimensions: '24" W x 24" D x 6" H',
      weight: '65 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '3.5 kW per zone',
      zones: '4 cooking zones'
    },
    overview: {
      description: 'Our induction cooktop station provides energy-efficient cooking with precise temperature control and safety features.',
      keyBenefits: ['Precise temperature control', 'Energy-efficient operation', 'Easy cleaning and maintenance', 'Advanced safety features', 'Instant heat response']
    },
    design: {
      description: 'Modern induction technology in a commercial-grade package for professional kitchens.',
      designFeatures: ['Digital temperature controls', 'Touch-sensitive interface', 'Pan detection system', 'Overheat protection', 'Easy-clean surface']
    },
    materials: {
      description: 'Built with durable materials and advanced induction technology.',
      materialSpecs: ['Ceramic glass cooking surface', 'Stainless steel housing', 'Professional induction coils', 'Electronic control system', 'Heat-resistant components']
    },
    performance: {
      description: 'Delivers precise cooking control with energy-efficient induction technology.',
      performanceMetrics: ['Power output: 3.5 kW per zone', 'Temperature range: 140°F - 460°F', 'Efficiency rating: 90%', 'Response time: Instant', 'Energy consumption: 25% less than gas']
    }
  }, {
    id: 20,
    name: 'Commercial Meat Slicer',
    image: professionalKitchenEquipment,
    price: '$1,800',
    description: 'Precision slicing for deli and food prep',
    features: ['Adjustable slice thickness', 'Safety features', 'Easy cleaning', 'Non-slip base'],
    category: 'Food Prep',
    specifications: {
      dimensions: '24" W x 20" D x 18" H',
      weight: '85 lbs',
      power: '115V, single phase',
      capacity: '12-inch blade',
      motor: '1/2 HP'
    },
    overview: {
      description: 'This commercial meat slicer provides precision slicing with safety features for deli and food preparation operations.',
      keyBenefits: ['Adjustable slice thickness control', 'Comprehensive safety features', 'Easy cleaning and maintenance', 'Stable non-slip base', 'Professional slicing results']
    },
    design: {
      description: 'Engineered for safe operation with precision controls and easy maintenance features.',
      designFeatures: ['Adjustable thickness dial', 'Safety guard system', 'Non-slip rubber feet', 'Easy-remove components', 'Sharpening stone included']
    },
    materials: {
      description: 'Constructed with food-grade materials and precision-engineered components.',
      materialSpecs: ['Stainless steel blade', 'Aluminum alloy body', 'Food-grade plastic guards', 'Stainless steel carriage', 'Non-slip rubber base']
    },
    performance: {
      description: 'Delivers consistent slicing results with precise thickness control and safety.',
      performanceMetrics: ['Blade diameter: 12 inches', 'Slice thickness: 0-25mm', 'Motor power: 1/2 HP', 'Cutting capacity: 8" x 6"', 'Slicing speed: 40 slices/minute']
    }
  }, {
    id: 21,
    name: 'Rotisserie Oven',
    image: commercialKitchen,
    price: '$7,500',
    description: 'Self-basting rotisserie for poultry and roasts',
    features: ['Multiple spit capacity', 'Glass viewing doors', 'Grease management', 'Timer controls'],
    category: 'Specialty Cooking',
    specifications: {
      dimensions: '36" W x 30" D x 48" H',
      weight: '385 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '4 spits',
      temperature: '250°F - 450°F'
    },
    overview: {
      description: 'Our rotisserie oven provides self-basting cooking with multiple spit capacity for high-volume poultry and roast preparation.',
      keyBenefits: ['Multiple spit capacity', 'Self-basting cooking action', 'Glass viewing doors', 'Efficient grease management', 'Programmable timer controls']
    },
    design: {
      description: 'Engineered for commercial rotisserie cooking with visibility and easy operation.',
      designFeatures: ['Four-spit rotating system', 'Tempered glass doors', 'Interior halogen lighting', 'Removable drip pans', 'Digital timer controls']
    },
    materials: {
      description: 'Built with commercial-grade materials for durability and easy maintenance.',
      materialSpecs: ['Stainless steel cooking chamber', 'Stainless steel spits', 'Tempered glass doors', 'Stainless steel drip system', 'Heavy-duty motor assembly']
    },
    performance: {
      description: 'Delivers even cooking results with self-basting action and consistent temperature control.',
      performanceMetrics: ['Cooking capacity: 4 spits', 'Temperature range: 250°F - 450°F', 'Rotation speed: 3 RPM', 'Cooking time: 45-90 minutes', 'Heat distribution: Even radiant']
    }
  }, {
    id: 22,
    name: 'Commercial Warmer Cabinet',
    image: professionalKitchenEquipment,
    price: '$2,400',
    description: 'Food holding cabinet with humidity control',
    features: ['Humidity control', 'Multiple shelves', 'Digital display', 'Insulated construction'],
    category: 'Food Holding',
    specifications: {
      dimensions: '24" W x 26" D x 72" H',
      weight: '225 lbs',
      power: '208V, single phase',
      capacity: '12 full pans',
      temperature: '140°F - 200°F'
    },
    overview: {
      description: 'This commercial warmer cabinet maintains food at safe serving temperatures with humidity control for quality preservation.',
      keyBenefits: ['Precise humidity control system', 'Multiple shelf configurations', 'Digital temperature display', 'Heavily insulated construction', 'Food safety compliance']
    },
    design: {
      description: 'Designed for food holding with features that maintain quality and safety.',
      designFeatures: ['Adjustable shelving system', 'Digital control panel', 'Interior lighting', 'Clear door panels', 'Caster wheel mobility']
    },
    materials: {
      description: 'Constructed with food-grade materials and efficient insulation systems.',
      materialSpecs: ['Stainless steel interior', 'Insulated door construction', 'Stainless steel shelving', 'Food-grade gaskets', 'Heavy-duty casters']
    },
    performance: {
      description: 'Maintains consistent temperature and humidity levels for optimal food holding.',
      performanceMetrics: ['Temperature range: 140°F - 200°F', 'Humidity control: 30-90%', 'Capacity: 12 full-size pans', 'Temperature accuracy: ±2°F', 'Energy consumption: 2.5 kW']
    }
  }, {
    id: 23,
    name: 'Pressure Steamer',
    image: commercialKitchen,
    price: '$9,200',
    description: 'High-pressure steaming for fast cooking',
    features: ['Pressure cooking capability', 'Multiple compartments', 'Steam injection', 'Safety systems'],
    category: 'Steamers',
    specifications: {
      dimensions: '36" W x 30" D x 72" H',
      weight: '485 lbs',
      power: '208V, 3-phase, 60Hz',
      capacity: '6 compartments',
      pressure: '15 PSI max'
    },
    overview: {
      description: 'Our pressure steamer delivers fast, efficient cooking with multiple compartments and advanced safety systems.',
      keyBenefits: ['High-pressure cooking capability', 'Multiple cooking compartments', 'Steam injection system', 'Advanced safety features', 'Fast cooking times']
    },
    design: {
      description: 'Engineered for high-pressure steam cooking with comprehensive safety and control systems.',
      designFeatures: ['Six individual compartments', 'Pressure relief systems', 'Digital control panel', 'Safety interlock doors', 'Steam generation system']
    },
    materials: {
      description: 'Built with pressure-rated materials and safety components for reliable operation.',
      materialSpecs: ['Stainless steel pressure vessels', 'Heavy-duty door seals', 'Safety valve systems', 'Insulated exterior panels', 'Professional-grade controls']
    },
    performance: {
      description: 'Delivers rapid cooking results with pressure steam technology and safety compliance.',
      performanceMetrics: ['Operating pressure: 15 PSI', 'Cooking time: 50% faster', 'Compartments: 6 individual', 'Steam generation: 40 lbs/hour', 'Safety rating: ASME certified']
    }
  }, {
    id: 24,
    name: 'Commercial Proofing Cabinet',
    image: professionalKitchenEquipment,
    price: '$3,600',
    description: 'Controlled environment for dough proofing',
    features: ['Temperature and humidity control', 'Multiple shelves', 'Clear doors', 'Caster wheels'],
    category: 'Bakery Equipment',
    specifications: {
      dimensions: '28" W x 30" D x 72" H',
      weight: '285 lbs',
      power: '208V, single phase',
      capacity: '18 full pans',
      temperature: '80°F - 120°F'
    },
    overview: {
      description: 'This commercial proofing cabinet provides precise temperature and humidity control for optimal dough rising.',
      keyBenefits: ['Precise temperature control', 'Humidity control system', 'Large pan capacity', 'Clear viewing doors', 'Mobile caster design']
    },
    design: {
      description: 'Engineered specifically for dough proofing with optimal environmental controls.',
      designFeatures: ['Digital temperature control', 'Humidity generation system', 'Adjustable shelf positions', 'Clear polycarbonate doors', 'Heavy-duty caster wheels']
    },
    materials: {
      description: 'Constructed with materials that maintain optimal proofing environment.',
      materialSpecs: ['Stainless steel interior', 'Insulated cabinet walls', 'Aluminum shelf construction', 'Clear polycarbonate doors', 'Stainless steel exterior']
    },
    performance: {
      description: 'Maintains precise environmental conditions for consistent dough proofing results.',
      performanceMetrics: ['Temperature range: 80°F - 120°F', 'Humidity range: 80-95%', 'Capacity: 18 full-size pans', 'Temperature accuracy: ±1°F', 'Proofing time: 30-180 minutes']
    }
  }, {
    id: 25,
    name: 'Ultrasonic Cleaner',
    image: commercialKitchen,
    price: '$1,500',
    description: 'Precision cleaning for small parts and utensils',
    features: ['Ultrasonic cleaning', 'Digital timer', 'Heated tank', 'Stainless steel construction'],
    category: 'Cleaning Equipment',
    specifications: {
      dimensions: '18" W x 12" D x 12" H',
      weight: '45 lbs',
      power: '115V, single phase',
      capacity: '2.5 gallons',
      frequency: '40 kHz'
    },
    overview: {
      description: 'Our ultrasonic cleaner provides precision cleaning for small parts and utensils using high-frequency sound waves.',
      keyBenefits: ['Ultrasonic cleaning technology', 'Digital timer controls', 'Heated cleaning tank', 'Stainless steel construction', 'Precision cleaning results']
    },
    design: {
      description: 'Compact design with professional ultrasonic cleaning capability for detailed cleaning tasks.',
      designFeatures: ['Digital timer display', 'Heated tank system', 'Removable basket', 'Drain valve system', 'Compact footprint']
    },
    materials: {
      description: 'Built with corrosion-resistant materials for reliable ultrasonic cleaning.',
      materialSpecs: ['Stainless steel tank', 'Stainless steel basket', 'Electronic control system', 'Heating element assembly', 'Rubber vibration dampeners']
    },
    performance: {
      description: 'Delivers thorough cleaning using ultrasonic technology with precise control.',
      performanceMetrics: ['Ultrasonic frequency: 40 kHz', 'Tank capacity: 2.5 gallons', 'Temperature range: Ambient to 180°F', 'Timer range: 1-30 minutes', 'Cleaning efficiency: 99.9%']
    }
  }];
  const product = products.find(p => p.id === parseInt(id || '1'));
  if (!product) {
    return <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <Link to="/professional-kitchen-equipment" className="text-primary hover:underline">
                Back to Products
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Image Modal with blur overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={productImages[modalImageIndex]}
                alt={`${product.name} - View ${modalImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevModalImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {modalImageIndex + 1} / {productImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/professional-kitchen-equipment" className="hover:text-primary transition-colors">
                Professional Kitchen Equipment
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Header */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <Link to="/professional-kitchen-equipment" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image Slideshow */}
                <div className="space-y-4">
                <div 
                  className="relative rounded-2xl overflow-hidden bg-secondary/10"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative w-full h-[500px] lg:h-[600px]">
                    {productImages.map((image, index) => <img key={index} src={image} alt={`${product.name} - View ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer hover:opacity-90 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} onClick={() => openModal(index)} />)}
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {productImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
                    </div>
                  </div>
                  
                  {product.badge && <div className="absolute top-4 left-4 z-10">
                      <Badge variant="secondary" className={`${product.badge === 'New' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-orange-500 text-white hover:bg-orange-600'}`}>
                        {product.badge}
                      </Badge>
                    </div>}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                    </div>
                  </div>
                  <h1 className="heading-premium text-3xl lg:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                {/* Specifications Quick View */}
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{product.specifications.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Weight:</span>
                      <p className="font-medium">{product.specifications.weight}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Power:</span>
                      <p className="font-medium">{product.specifications.power}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Capacity:</span>
                      <p className="font-medium">{product.specifications.capacity}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-premium flex-1">
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Download Specs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-12 bg-secondary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Design
                </TabsTrigger>
                <TabsTrigger value="materials" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Materials
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Performance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Product Overview
                    </CardTitle>
                    <CardDescription>
                      Comprehensive details about this professional kitchen equipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.overview.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {product.overview.keyBenefits.map((benefit, index) => <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="design">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Design & Construction
                    </CardTitle>
                    <CardDescription>
                      Engineering excellence meets functional design
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.design.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Design Features</h4>
                      <ul className="space-y-2">
                        {product.design.designFeatures.map((feature, index) => <li key={index} className="flex items-start gap-2">
                            <Wrench className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="materials">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Materials & Build Quality
                    </CardTitle>
                    <CardDescription>
                      Premium materials for superior durability and food safety
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.materials.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Material Specifications</h4>
                      <ul className="space-y-2">
                        {product.materials.materialSpecs.map((spec, index) => <li key={index} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{spec}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Performance Specifications
                    </CardTitle>
                    <CardDescription>
                      Technical performance data and operational metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.performance.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Performance Metrics</h4>
                      <ul className="space-y-2">
                        {product.performance.performanceMetrics.map((metric, index) => <li key={index} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{metric}</span>
                          </li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="heading-premium text-2xl lg:text-3xl mb-4">Trusted by Leading Hotels</h2>
              <p className="text-muted-foreground mb-6">
                Premium hotels worldwide trust our {product.category.toLowerCase()} equipment
              </p>
              
              {/* Scrolling Hotels List */}
              <div className="relative overflow-hidden bg-secondary/5 py-4 rounded-lg">
                <div className="flex animate-scroll-left whitespace-nowrap">
                  <div className="flex items-center space-x-8 min-w-max">
                    {[
                      "The Ritz-Carlton", "Four Seasons Hotels", "Mandarin Oriental", "St. Regis Hotels", 
                      "Conrad Hotels", "Park Hyatt", "The Peninsula Hotels", "Shangri-La Hotels",
                      "InterContinental Hotels", "Waldorf Astoria", "Grand Hyatt", "JW Marriott",
                      "The Luxury Collection", "Fairmont Hotels", "Rosewood Hotels", "Aman Resorts",
                      "One&Only Resorts", "Bulgari Hotels", "Edition Hotels", "W Hotels"
                    ].map((hotel, index) => (
                      <span key={index} className="text-sm font-medium text-foreground/80 px-4 py-2 bg-background/80 rounded-full">
                        {hotel}
                      </span>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="flex items-center space-x-8 min-w-max ml-8">
                    {[
                      "The Ritz-Carlton", "Four Seasons Hotels", "Mandarin Oriental", "St. Regis Hotels", 
                      "Conrad Hotels", "Park Hyatt", "The Peninsula Hotels", "Shangri-La Hotels",
                      "InterContinental Hotels", "Waldorf Astoria", "Grand Hyatt", "JW Marriott",
                      "The Luxury Collection", "Fairmont Hotels", "Rosewood Hotels", "Aman Resorts",
                      "One&Only Resorts", "Bulgari Hotels", "Edition Hotels", "W Hotels"
                    ].map((hotel, index) => (
                      <span key={`duplicate-${index}`} className="text-sm font-medium text-foreground/80 px-4 py-2 bg-background/80 rounded-full">
                        {hotel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(relatedProduct => <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="card-premium p-4 group hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">{relatedProduct.price}</p>
                  </div>
                </Link>)}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ProductDetail;