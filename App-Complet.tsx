/**
 * SITE COMPLET - PAPILLON GUADELOUPE CRÉATION
 * 
 * Site web complet pour l'entreprise d'aménagement paysager en Guadeloupe
 * Architecte paysagiste de jardins d'exception
 * 
 * Fichier unique contenant toutes les pages et composants
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const CONTACT_EMAIL = "contact@papillon-guadeloupe.com";
const PHONE = "+590 690 XX XX XX";
const HERO_IMAGE = "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTYwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Villa moderne - Transformation complète",
    before: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBiZWZvcmUlMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODk2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjAzRCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5NjAzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Particulier",
    location: "Les Abymes",
    description: "Transformation complète d'un jardin résidentiel avec création d'espaces de vie extérieurs.",
    services: ["Conception 3D", "Plans techniques", "Suivi de réalisation"]
  },
  {
    id: 2,
    title: "Hôtel de luxe - Aménagement tropical",
    before: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGUlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU4OTYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGd1YWRlbG91cGV8ZW58MXx8fHwxNzU4OTYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Professionnel",
    location: "Saint-François",
    description: "Aménagement paysager complet d'un complexe hôtelier 4 étoiles.",
    services: ["Étude paysagère", "Maîtrise d'œuvre", "Coordination"]
  },
  {
    id: 3,
    title: "Résidence privée - Jardin zen tropical",
    before: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NTg5NjA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTYwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Particulier",
    location: "Gosier",
    description: "Création d'un jardin zen avec bassins et espaces de méditation.",
    services: ["Visite conseil", "Conception 3D", "Palette végétale"]
  }
];

// ============================================================================
// LAYOUT COMPONENT
// ============================================================================

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white">🦋</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">Papillon Guadeloupe</div>
              <div className="text-sm text-muted-foreground">Création Paysagère</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : ''}`}>
              Accueil
            </Link>
            <Link to="/services" className={`hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-medium' : ''}`}>
              Services
            </Link>
            <Link to="/realisations" className={`hover:text-primary transition-colors ${isActive('/realisations') ? 'text-primary font-medium' : ''}`}>
              Réalisations
            </Link>
            <Link to="/processus" className={`hover:text-primary transition-colors ${isActive('/processus') ? 'text-primary font-medium' : ''}`}>
              Notre Processus
            </Link>
            <Link to="/contact" className={`hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-medium' : ''}`}>
              Contact
            </Link>
            <Button asChild className="ml-4">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {mobileNavOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileNavOpen(false)} className={`py-2 hover:text-primary ${isActive('/') ? 'text-primary font-medium' : ''}`}>
                Accueil
              </Link>
              <Link to="/services" onClick={() => setMobileNavOpen(false)} className={`py-2 hover:text-primary ${isActive('/services') ? 'text-primary font-medium' : ''}`}>
                Services
              </Link>
              <Link to="/realisations" onClick={() => setMobileNavOpen(false)} className={`py-2 hover:text-primary ${isActive('/realisations') ? 'text-primary font-medium' : ''}`}>
                Réalisations
              </Link>
              <Link to="/processus" onClick={() => setMobileNavOpen(false)} className={`py-2 hover:text-primary ${isActive('/processus') ? 'text-primary font-medium' : ''}`}>
                Notre Processus
              </Link>
              <Link to="/contact" onClick={() => setMobileNavOpen(false)} className={`py-2 hover:text-primary ${isActive('/contact') ? 'text-primary font-medium' : ''}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">🦋</span>
                </div>
                <div>
                  <div className="font-bold">Papillon Guadeloupe</div>
                  <div className="text-sm opacity-80">Création Paysagère</div>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Architecte paysagiste en Guadeloupe, nous concevons des jardins d'exception parfaitement adaptés au climat tropical.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/services" className="hover:opacity-100">Visite conseil</Link></li>
                <li><Link to="/services" className="hover:opacity-100">Conception 3D</Link></li>
                <li><Link to="/services" className="hover:opacity-100">Études paysagères</Link></li>
                <li><Link to="/services" className="hover:opacity-100">Maîtrise d'œuvre</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Informations</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/realisations" className="hover:opacity-100">Nos réalisations</Link></li>
                <li><Link to="/processus" className="hover:opacity-100">Notre processus</Link></li>
                <li><Link to="/contact" className="hover:opacity-100">Demander un devis</Link></li>
                <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>📞 {PHONE}</div>
                <div>✉️ {CONTACT_EMAIL}</div>
                <div>📍 Guadeloupe</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-80">
              © {new Date().getFullYear()} Papillon Guadeloupe Création. Tous droits réservés.
            </div>
            <div className="text-sm opacity-80 mt-4 md:mt-0">
              Aménagement paysager professionnel en Guadeloupe
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// PAGE ACCUEIL
// ============================================================================

function HomePage() {
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Papillon Guadeloupe Création a transformé notre espace extérieur en véritable havre de paix. Leur expertise technique et leur créativité ont dépassé nos attentes.",
      author: "Marie D., Propriétaire villa Les Abymes",
      rating: 5
    },
    {
      id: 2,
      quote: "Collaboration parfaite pour l'aménagement de notre complexe hôtelier. Plans 3D précis, respect des délais et rendu exceptionnel.",
      author: "Jean-Luc P., Directeur Hôtel Tropical Resort",
      rating: 5
    },
    {
      id: 3,
      quote: "Service professionnel de A à Z. La visite conseil nous a permis d'optimiser notre budget et d'obtenir le jardin de nos rêves.",
      author: "Sophie L., Résidence Gosier",
      rating: 5
    },
  ];

  const highlights = [
    {
      title: "Expertise Tropicale",
      description: "Connaissance approfondie de la flore et du climat guadeloupéen",
      icon: "🌺"
    },
    {
      title: "Visualisation 3D",
      description: "Rendus photo-réalistes pour valider votre projet avant réalisation",
      icon: "🎨"
    },
    {
      title: "Accompagnement Complet",
      description: "De la conception à la réalisation avec nos partenaires qualifiés",
      icon: "🤝"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMAGE}
            alt="Aménagement paysager de luxe en Guadeloupe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-green-600/20 text-white border-green-600/30">
                🌺 Spécialiste des Jardins Tropicaux
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Architecte paysagiste de jardins d'exception en Guadeloupe
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              De la conception 3D à la réalisation, nous donnons vie à vos projets d'aménagement paysager 
              avec l'expertise d'un climat tropical unique et la passion du détail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild>
                <Link to="/contact">Obtenir un devis gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-black">
                <Link to="/realisations">Découvrir nos réalisations</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Visualisation 3D incluse</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expertise climat tropical</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suivi personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pourquoi nous choisir ?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une expertise unique en Guadeloupe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous combinons passion du paysagisme, expertise tropicale et technologies modernes 
              pour créer des jardins d'exception.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des solutions pour tous vos projets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Particuliers ou professionnels, nous avons la solution adaptée à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <CardTitle>Particuliers</CardTitle>
                    <CardDescription>Pour votre résidence</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Visite conseil personnalisée
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Conception 3D complète
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    À partir de 225€ TTC
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <CardTitle>Professionnels</CardTitle>
                    <CardDescription>Projets d'envergure</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Études paysagères complexes
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Maîtrise d'œuvre paysagère
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hôtels, résidences, espaces publics
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La satisfaction de nos clients
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[testimonialsIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl italic text-muted-foreground mb-6">
                  "{testimonials[testimonialsIndex].quote}"
                </blockquote>
                <footer className="font-medium">
                  — {testimonials[testimonialsIndex].author}
                </footer>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTestimonialsIndex(i => i === 0 ? testimonials.length - 1 : i - 1)}
                >
                  ←
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialsIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === testimonialsIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTestimonialsIndex(i => i === testimonials.length - 1 ? 0 : i + 1)}
                >
                  →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer votre espace extérieur ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons 
                donner vie à vos projets d'aménagement paysager.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Demander un devis gratuit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/realisations">Voir nos réalisations</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// PAGE SERVICES
// ============================================================================

function ServicesPage() {
  const servicesParticuliers = [
    {
      title: "Visite Conseil Personnalisée",
      description: "Analyse de votre terrain et conseils d'experts pour optimiser votre aménagement paysager.",
      price: "À partir de 225€ TTC",
      duration: "2h à domicile",
      includes: [
        "Analyse complète du terrain",
        "Conseils personnalisés d'agencement",
        "Préconisations végétales adaptées au climat",
        "Proposition de matériaux",
        "Croquis d'idées d'aménagement"
      ]
    },
    {
      title: "Conception Complète 3D",
      description: "Création d'un aménagement paysager sur mesure avec plans techniques et visualisations 3D.",
      price: "Sur devis",
      duration: "3-4 semaines",
      includes: [
        "Plans de masse et plantation légendaires",
        "Rendus 3D plusieurs points de vue",
        "Palette végétale détaillée",
        "Documents techniques complets",
        "Accompagnement dans la réalisation"
      ]
    }
  ];

  const servicesProfessionnels = [
    {
      title: "Études Paysagères Complexes",
      description: "Conception d'aménagements paysagers pour projets d'envergure.",
      price: "Sur devis",
      duration: "4-8 semaines",
      includes: [
        "Étude d'impact environnemental",
        "Plans techniques conformes aux normes",
        "Modélisation 3D photo-réaliste",
        "Vidéos 3D de présentation",
        "Accompagnement réglementaire"
      ]
    },
    {
      title: "Maîtrise d'Œuvre Paysagère",
      description: "Suivi complet de vos projets d'aménagement, de la conception à la réalisation.",
      price: "Sur devis",
      duration: "Variable",
      includes: [
        "Coordination des intervenants",
        "Suivi de chantier",
        "Contrôle qualité",
        "Réception des travaux",
        "Garantie de conformité"
      ]
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des solutions sur mesure pour chaque projet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Que vous soyez particulier ou professionnel, nous adaptons notre expertise 
              à vos besoins spécifiques pour concevoir des jardins d'exception.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="particuliers" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
              <TabsTrigger value="professionnels">Professionnels</TabsTrigger>
            </TabsList>

            <TabsContent value="particuliers">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Services pour Particuliers</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transformez votre espace extérieur en véritable havre de paix.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicesParticuliers.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      <div className="text-sm text-muted-foreground">
                        ⏱️ Durée : {service.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Inclus dans cette prestation :</h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6" asChild>
                        <Link to="/contact">Demander ce service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professionnels">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Services pour Professionnels</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Accompagnement technique et créatif pour vos projets d'envergure.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicesProfessionnels.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      <div className="text-sm text-muted-foreground">
                        ⏱️ Durée : {service.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Prestations incluses :</h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6" asChild>
                        <Link to="/contact">Demander un devis</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous pour discuter de vos besoins et recevoir une proposition personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/processus">Voir notre processus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// PAGE RÉALISATIONS
// ============================================================================

function RealisationsPage() {
  const [portfolioIndex, setPortfolioIndex] = useState(PORTFOLIO_DATA.map(() => 50));
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Particulier", "Professionnel"];

  const filteredPortfolio = selectedCategory === "Tous" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(project => project.category === selectedCategory);

  function handlePortfolioSlide(idx: number, value: number) {
    setPortfolioIndex((prev) => prev.map((v, i) => (i === idx ? value : v)));
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Réalisations</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des transformations spectaculaires
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment nous transformons les espaces extérieurs en Guadeloupe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-32"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, idx) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <ImageWithFallback
                    src={project.before}
                    alt={`${project.title} - avant`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 overflow-hidden">
                    <ImageWithFallback
                      src={project.after}
                      alt={`${project.title} - après`}
                      className="absolute top-0 left-0 h-full object-cover transition-all duration-300"
                      style={{
                        width: `${portfolioIndex[idx]}%`,
                        clipPath: `inset(0 ${100 - portfolioIndex[idx]}% 0 0)`,
                      }}
                    />
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={portfolioIndex[idx]}
                    onChange={(e) => handlePortfolioSlide(idx, Number(e.target.value))}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-11/12 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                    Avant
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                    Après
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.location}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Services réalisés :</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((service, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                      <span>Glissez pour comparer</span>
                      <span>{portfolioIndex[idx]}% après</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre projet sera notre prochaine réalisation
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez nos clients satisfaits et transformez votre espace extérieur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Commencer mon projet</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/services">Voir nos services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// PAGE PROCESSUS
// ============================================================================

function ProcessusPage() {
  const processSteps = [
    {
      step: 1,
      title: "Analyse & Conception",
      subtitle: "Étude approfondie de votre projet",
      duration: "1-2 semaines",
      description: "Questionnaire personnalisé, visite sur site et analyse des contraintes techniques.",
      details: [
        "Relevé des mesures précises",
        "Analyse du terrain et de l'exposition", 
        "Étude des contraintes techniques",
        "Identification des besoins et souhaits",
        "Devis personnalisé détaillé"
      ],
      icon: "📋"
    },
    {
      step: 2,
      title: "Création & Visualisation",
      subtitle: "Conception de votre jardin idéal",
      duration: "2-4 semaines",
      description: "Esquisse initiale, puis projet 3D complet avec possibilité de modifications.",
      details: [
        "Esquisse d'aménagement initial",
        "Rendus 3D photo-réalistes",
        "Plusieurs points de vue",
        "Modifications incluses",
        "Validation finale du projet"
      ],
      icon: "🎨"
    },
    {
      step: 3,
      title: "Remise & Accompagnement",
      subtitle: "Concrétisation de votre projet",
      duration: "1 semaine + suivi",
      description: "Livraison des documents complets et accompagnement pour la réalisation.",
      details: [
        "Plans techniques détaillés",
        "Liste des matériaux et quantitatifs",
        "Palette végétale adaptée",
        "Recommandations d'entretien",
        "Mise en relation avec nos partenaires"
      ],
      icon: "🚀"
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Notre Processus</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Une méthodologie éprouvée en 3 étapes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De l'analyse initiale à la remise des documents finaux, 
              nous vous accompagnons à chaque étape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-lg">{step.subtitle}</CardDescription>
                          <Badge variant="secondary" className="mt-2">
                            Durée : {step.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <div>
                        <h4 className="font-medium mb-3">Détails de cette étape :</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center text-6xl mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium text-muted-foreground">
                      Étape {step.step} : {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Notre processus éprouvé garantit un résultat à la hauteur de vos attentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Démarrer mon projet</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/services">Voir nos services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// PAGE CONTACT
// ============================================================================

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    location: '',
    budget: '',
    message: '',
    urgency: ''
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      ...formData,
      date: new Date().toISOString(),
    };
    console.log("DEMANDE DE CONTACT", payload);
    alert("Merci ! Votre demande a été envoyée. Nous vous recontacterons dans les 24h.");
    setFormData({ 
      name: '', 
      email: '', 
      phone: '',
      project: '', 
      location: '',
      budget: '',
      message: '',
      urgency: ''
    });
  }

  function handleInputChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  const zones = [
    "Les Abymes", "Baie-Mahault", "Le Gosier", "Sainte-Anne", "Saint-François",
    "Le Moule", "Petit-Bourg", "Capesterre-Belle-Eau", "Basse-Terre",
    "Pointe-à-Pitre", "Autre commune"
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Démarrons votre projet ensemble
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Racontez-nous votre vision et recevez une proposition personnalisée sous 24h.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Demande de devis gratuit</CardTitle>
                <CardDescription>
                  Plus votre demande est détaillée, plus notre proposition sera précise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required 
                        placeholder="Votre nom" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone</label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        type="tel"
                        placeholder="0690 XX XX XX" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      type="email" 
                      required 
                      placeholder="votre@email.com" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de service *</label>
                      <Select value={formData.project} onValueChange={(value) => handleInputChange('project', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre besoin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visite-conseil">Visite conseil (particulier)</SelectItem>
                          <SelectItem value="conception-3d">Conception complète 3D</SelectItem>
                          <SelectItem value="etude-professionnelle">Étude paysagère (professionnel)</SelectItem>
                          <SelectItem value="maitrise-oeuvre">Maîtrise d'œuvre</SelectItem>
                          <SelectItem value="autre">Autre / Je ne sais pas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Localisation</label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre commune" />
                        </SelectTrigger>
                        <SelectContent>
                          {zones.map(zone => (
                            <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description de votre projet *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <div className="border-t pt-4">
                    <Button type="submit" className="w-full">
                      Envoyer ma demande
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Nous nous engageons à vous répondre dans les 24h ouvrées.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact direct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a>
                    <div className="text-sm text-muted-foreground">Du lundi au vendredi, 8h-18h</div>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
                    <div className="text-sm text-muted-foreground">Réponse sous 24h</div>
                  </div>
                  <div>
                    <div className="font-medium">Zone d'intervention</div>
                    <div className="text-muted-foreground">Toute la Guadeloupe</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pourquoi nous choisir ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Expertise tropicale</div>
                        <div className="text-sm text-muted-foreground">Connaissance approfondie du climat</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Visualisation 3D</div>
                        <div className="text-sm text-muted-foreground">Rendus photo-réalistes</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Accompagnement complet</div>
                        <div className="text-sm text-muted-foreground">De la conception à la réalisation</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// APPLICATION PRINCIPALE
// ============================================================================

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/processus" element={<ProcessusPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}