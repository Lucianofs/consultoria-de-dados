/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { 
  BarChart3, 
  Brain, 
  Target, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Zap,
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Download,
  Settings,
  Search,
  MousePointer2
} from "lucide-react";

const generatePDF = (type: 'MAPA' | 'EXECUCAO') => {
  const doc = new jsPDF();
  const timestamp = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  
  if (type === 'MAPA') {
    // --- 1. CAPA EXECUTIVA (Pág 1) ---
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("RELATÓRIO EXECUTIVO ESTRATÉGICO", 20, 60);
    doc.setFontSize(12);
    doc.setTextColor(14, 165, 233);
    doc.text("Método V.A.L.O.R. (Vigilância Analítica e Lógica de Otimização de Resultados)", 20, 75);
    doc.text("Inteligência Analítica e Performance Humana", 20, 82);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("Estrategista Responsável: Luciano Francisco", 20, 100);
    doc.setFontSize(12);
    doc.text("Arquiteto de Equity & Lucratividade", 20, 110);
    doc.text("--------------------------------------------------", 20, 120);
    doc.setFontSize(14);
    doc.text("MARCA: LUCIANO FRANCISCO", 20, 140);
    doc.setFontSize(11);
    doc.text("Auditoria de Business Intelligence e Alinhamento de Capital Humano", 20, 155);
    doc.text("Consultoria Estratégica de Alto Impacto e Diagnóstico Multidisciplinar", 20, 162);
    doc.text(`DATA: ${timestamp}`, 20, 180);

    // --- 2. SUMÁRIO EXECUTIVO DE IMPACTO (Pág 2) ---
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("2. SUMÁRIO EXECUTIVO DE IMPACTO", 20, 30);
    doc.setFontSize(12);
    doc.setTextColor(220, 38, 38); // Red
    doc.text("STATUS CRÍTICO:", 20, 45);
    doc.setTextColor(0, 0, 0);
    doc.text("Identificamos uma dispersão severa de autoridade. A marca opera como um catálogo de links,", 20, 52);
    doc.text("diluindo a percepção de valor do serviço de consultoria high-ticket.", 20, 59);
    
    doc.setFontSize(14);
    doc.setTextColor(14, 165, 233);
    doc.text("VEREDICTO:", 20, 75);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text("Você está deixando no mínimo R$ 15.000 a R$ 45.000 mensais na mesa por falta de", 20, 82);
    doc.text("um funil de autoridade unificado e rastreamento de dados de conversão.", 20, 89);

    doc.text("PRINCIPAIS ACHADOS CRÍTICOS:", 20, 105);
    const achados = [
      "- Síndrome do Multinicho: Confusão de público e algoritmo.",
      "- Ausência de Pixel/API de Conversão: Tráfego cego.",
      "- Estrutura de Site 'Linktree': Baixa retenção e zero SEO.",
      "- Dispersão de Margem: Produtos de baixo ticket com o mesmo peso visual.",
      "- Falta de Funil de Consciência: O cliente não entende a jornada."
    ];
    doc.text(achados, 25, 115);

    doc.setFontSize(13);
    doc.text("O PILAR DO CAPITAL HUMANO:", 20, 160);
    doc.setFontSize(10);
    const capitalHumano = "Nota sobre Performance Biopsicossocial: Este diagnóstico compreende que uma empresa é o reflexo direto da clareza e da energia de seu líder. Identificamos que gargalos operacionais frequentemente têm origem em bloqueios de execução e dispersão mental do fundador. O Método V.A.L.O.R. integra a Análise Holística Operacional para alinhar o estado interno do líder à escala do negócio.";
    doc.text(doc.splitTextToSize(capitalHumano, 170), 20, 170);

    // --- 3. ETAPA 1 — CLASSIFICAÇÃO E MATURIDADE (Pág 3-4) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("3. ETAPA 1 — CLASSIFICAÇÃO E MATURIDADE", 20, 30);
    doc.setFontSize(11);
    doc.text("Tipo de Entrada: Marca Pessoal Híbrida (Consultoria + Infoprodutos)", 20, 45);
    doc.text("Segmentos: Business Intelligence, Desenvolvimento Humano, Educação, Afiliados.", 20, 52);
    
    autoTable(doc, {
      startY: 60,
      head: [['Critério', 'Avaliação', 'Nível (1-5)']],
      body: [
        ['Autoridade Visual', 'Premium / Dark Mode', '4'],
        ['Rastreamento de Dados', 'Inexistente / Manual', '1'],
        ['Funil de Vendas', 'Fragmentado', '2'],
        ['Escalabilidade', 'Dependente do Operacional', '2'],
      ],
    });

    doc.text("Job to be Done Principal:", 20, 110);
    doc.text("1. Escalar o lucro através da clareza de dados.", 20, 117);
    doc.text("2. Destravar o líder para permitir a escala do negócio.", 20, 124);

    doc.setTextColor(220, 38, 38);
    doc.text("ALERTA CRÍTICO: A marca NÃO comunica a exclusividade da consultoria hoje.", 20, 140);

    // --- 4. ETAPA 2 — PSICOGRAFIA E ANÁLISE DE MERCADO (Pág 5-7) ---
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.text("4. ETAPA 2 — PSICOGRAFIA E MERCADO", 20, 30);
    doc.setFontSize(11);
    doc.text("MEDOS: Estagnação, obsolescência tecnológica, perda de propósito.", 20, 45);
    doc.text("DESEJOS: Liberdade geográfica, reconhecimento como autoridade, lucro passivo.", 20, 52);
    doc.text("DORES PROFUNDAS: 'Trabalho muito e não vejo o dinheiro sobrar'.", 20, 59);

    autoTable(doc, {
      startY: 70,
      head: [['Segmento', 'Volume e Tendência']],
      body: [
        ['Consultoria de Dados', 'Crescimento de 300% ao ano (IA)'],
        ['Desenvolvimento Humano', 'Busca por saúde mental pós-pandemia'],
        ['Infoprodutos', 'Saturação de promessas vazias / Busca por seriedade'],
      ],
    });

    doc.text("Saturação: Alta em cursos básicos. Oceano Azul: Consultoria Híbrida (Dados + Alma).", 20, 120);
    doc.text("Benchmarking: Tony Robbins (Alma), Neil Patel (Dados), Ray Dalio (Estratégia).", 20, 130);

    // --- 5. ETAPA 3 — AUDITORIA DE ATIVOS DIGITAIS (Pág 8-10) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("5. ETAPA 3 — AUDITORIA DE ATIVOS DIGITAIS", 20, 30);
    doc.text("Diagnóstico Crítico do Site: lucianofrancisco.com.br", 20, 45);
    doc.setFontSize(10);
    doc.text("STATUS: Falha de Indexação Estratégica. O site é um 'Linktree' gigante.", 20, 52);
    
    autoTable(doc, {
      startY: 60,
      head: [['Plataforma', 'Status / Observação']],
      body: [
        ['Instagram', 'Bom engajamento, mas link da bio disperso.'],
        ['LinkedIn', 'Subutilizado para High-Ticket.'],
        ['YouTube', 'Foco educacional, falta CTA de venda.'],
      ],
    });

    // --- 6. ETAPA 4 — ENGENHARIA DE TRÁFEGO (Pág 11-12) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("6. ETAPA 4 — ENGENHARIA DE TRÁFEGO", 20, 30);
    autoTable(doc, {
      startY: 40,
      head: [['Canal', 'Status Atual', 'Status Ideal %']],
      body: [
        ['Google Ads (Pesquisa)', '0%', '50%'],
        ['Meta Ads (Remarketing)', '10%', '30%'],
        ['YouTube Ads', '0%', '20%'],
      ],
    });
    doc.text("Estratégia Oceano Azul: Google Ads para termos de 'Consultoria BI' e 'Mentoria Executiva'.", 20, 80);

    // --- 7. ETAPA 5 — KPIs E POWER BI (Pág 13-15) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("7. ETAPA 5 — ANÁLISE DE KPIs E POWER BI", 20, 30);
    doc.text("📊 VISUALIZAÇÃO POWER BI RECOMENDADA:", 20, 50);
    doc.setFontSize(11);
    doc.text("1. Gráfico de Cascata: Para entender a erosão da margem (Receita -> Custos -> Lucro).", 20, 60);
    doc.text("2. Treemap: Para identificar a origem real das vendas (Qual canal traz o cliente caro?).", 20, 70);
    doc.text("3. Gauge: Meta de Faturamento Mensal vs. Realizado em tempo real.", 20, 80);

    // --- 8. ETAPA 6 — GARGALOS (Pág 16-17) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("8. ETAPA 6 — GARGALOS E BLOQUEADORES", 20, 30);
    doc.text("- Produto: Falta de um 'High-Ticket' claro de R$ 15k+.", 20, 50);
    doc.text("- Funil: O cliente cai direto na compra do livro, sem passar pelo diagnóstico.", 20, 60);
    doc.text("- Operação: Luciano é o gargalo. Falta automação de triagem.", 20, 70);

    // --- 9. ETAPAS 7-9 — PLANO DE ACELERAÇÃO (Pág 18-22) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.text("9. ETAPAS 7-9 — PLANO DE ACELERAÇÃO", 20, 30);
    autoTable(doc, {
      startY: 40,
      head: [['Ação', 'Prioridade', 'Impacto']],
      body: [
        ['Setup GTM/Pixel/API', 'URGENTE', 'Clareza de Dados'],
        ['Lançamento Mentoria Elite', 'ALTA', 'Injeção de Caixa'],
        ['Google Ads Fundo de Funil', 'MÉDIA', 'Escala de Leads'],
      ],
    });

    // --- 10. RELATÓRIO EXECUTIVO FINAL (Pág 23-25) ---
    doc.addPage();
    doc.setFontSize(20);
    doc.text("10. RELATÓRIO EXECUTIVO FINAL", 20, 30);
    doc.setFontSize(12);
    doc.text("VEREDICTO FINAL: O seu negócio é uma mina de ouro coberta por ruído.", 20, 50);
    doc.text("A escala para os 7 dígitos exige a morte do 'vendedor de links' e o nascimento", 20, 60);
    doc.text("do Arquiteto de Equity. O mercado está pronto, os dados estão aí. Vamos escalar?", 20, 70);

    doc.save("Relatorio_01_O_MAPA_PREMIUM.pdf");
  } else {
    // --- RELATÓRIO 2: EXECUÇÃO (MÃO NA MASSA) ---
    doc.setFillColor(16, 185, 129);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.text("MANUAL DE EXECUÇÃO", 20, 80);
    doc.setFontSize(40);
    doc.text("MÃO NA MASSA", 20, 100);
    doc.setFontSize(14);
    doc.text("IMPLEMENTAÇÃO TÁTICA IMEDIATA", 20, 120);
    doc.text(`DATA: ${timestamp}`, 20, 140);

    // --- PAGE 2: CRONOGRAMA 7 DIAS ---
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("1. CRONOGRAMA OPERACIONAL (7 DIAS)", 20, 30);
    autoTable(doc, {
      startY: 40,
      head: [['Dia', 'Ação Crítica', 'Ferramenta']],
      body: [
        ['1', 'Reset de Bio e Foto de Autoridade', 'Instagram/LinkedIn'],
        ['2', 'Setup de Pixel e API de Conversão', 'Meta Business'],
        ['3', 'Gravação de 3 Reels de Consciência', 'CapCut'],
        ['4', 'Publicação de Artigo de Equity', 'LinkedIn'],
        ['5', 'Abertura de Lista de Espera', 'WhatsApp'],
        ['6', 'Revisão de Oferta High-Ticket', 'Estratégia'],
        ['7', 'Análise de Primeiras Métricas', 'Power BI'],
      ],
    });

    // --- PAGE 3: ROTEIROS VIRAIS ---
    doc.addPage();
    doc.setFontSize(20);
    doc.text("2. ROTEIROS PARA VÍDEOS VIRAIS", 20, 30);
    doc.setFontSize(12);
    doc.text("Gancho: 'Sua empresa é o reflexo da sua alma'.", 20, 50);
    doc.text("Conteúdo: Explique como a falta de dados gera ansiedade.", 20, 60);
    doc.text("CTA: 'Comente ESCALA para o Diagnóstico 360'.", 20, 70);

    doc.save("Relatorio_02_A_EXECUCAO_ULTRA.pdf");
  }
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
    {/* Background Effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400">
            <div className="bg-slate-950 rounded-full p-1">
              <img 
                src="https://lucianofrancisco.com.br/wp-content/uploads/2023/08/luciano-francisco-perfil.png" 
                alt="Luciano Francisco" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/luciano/400/400";
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Estrategista de Negócios & Alma
          </span>
          <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-tight md:leading-[0.9] uppercase italic">
            CFO da Alma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">e dos Negócios</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Escalo pessoas para escalar negócios. <br className="hidden md:block" />
            A fusão exata entre <span className="text-white font-medium">Estratégia, Dados & Consciência.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://chat.whatsapp.com/KI0aI6wcth72EYdw5Kj1oO"
              target="_blank"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-2xl hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Diagnóstico de Escala <ArrowRight className="w-5 h-5" />
            </a>
            {/* Hidden PDF Button - Triggered via Console or hidden action if needed, but removed from UI as requested */}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PJ Section */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-10 rounded-[40px] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <BarChart3 className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pessoas Jurídicas</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Consultoria de Escala 360. Implementação de BI, Dashboards e Inteligência Analítica para decisões que geram lucro real.
            </p>
            <ul className="space-y-4 mb-10">
              {['Arquitetura de Dados', 'Growth Marketing', 'Automação de Processos', 'Mentoria de Gestão'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-sky-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://chat.whatsapp.com/KI0aI6wcth72EYdw5Kj1oO" target="_blank" className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors">
              Solicitar Consultoria <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* PF Section */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-10 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Brain className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pessoas Físicas</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Diagnóstico de Almas. Terapias e mentorias focadas em destravar bloqueios emocionais que impedem sua evolução.
            </p>
            <ul className="space-y-4 mb-10">
              {['Mentoria de Carreira', 'Equilíbrio Emocional', 'Propósito de Vida', 'Destravamento de Escala'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://chat.whatsapp.com/KI0aI6wcth72EYdw5Kj1oO" target="_blank" className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors">
              Agendar Diagnóstico <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section className="py-24 bg-slate-950 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">Obras & Curadoria</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Acesso direto ao meu conhecimento e às ferramentas que eu confio para a sua jornada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { 
            title: "Energia", 
            desc: "Passado, presente, futuro. O guia definitivo.", 
            link: "https://www.amazon.com.br/Energia-Todos-Passado-presente-futuro-ebook/dp/B0CDJNDCVK",
            img: "https://picsum.photos/seed/energia_book/400/600"
          },
          { 
            title: "O Valor do seu EU", 
            desc: "Descubra o potencial oculto dentro de você.", 
            link: "https://amzn.to/3Kns9S1",
            img: "https://picsum.photos/seed/valor_eu/400/600"
          },
          { 
            title: "Política Pública", 
            desc: "Estratégias para a terceira idade.", 
            link: "https://amzn.to/3XKbaMJ",
            img: "https://picsum.photos/seed/politica/400/600"
          },
          { 
            title: "Windows p/ Idosos", 
            desc: "Tecnologia sem barreiras.", 
            link: "https://hotmart.com/pt-br/marketplace/produtos/windows-para-pessoas-idosas-e-voce/P50344608R",
            img: "https://picsum.photos/seed/windows/400/600"
          },
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="group block p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="aspect-[3/4] rounded-2xl bg-slate-800 mb-6 overflow-hidden relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Loja Amazon", link: "https://www.amazon.com.br/shop/profile/amzn1.account.AH4TOJ6RR5E3OJR6R4OTPKGZGKQQ/list/MDB8N5I8AVCM", icon: <Zap className="text-orange-400" /> },
          { name: "Loja Shopee", link: "https://br.shp.ee/tLiWtzn", icon: <Zap className="text-orange-500" /> },
          { name: "Loja Mercado Livre", link: "https://mercadolivre.com/sec/1FATQPa", icon: <Zap className="text-yellow-400" /> },
        ].map((store, i) => (
          <a key={i} href={store.link} target="_blank" className="flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-400 transition-all group">
            <span className="text-xl font-bold text-white">{store.name}</span>
            <div className="group-hover:translate-x-2 transition-transform">{store.icon}</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="py-32 bg-slate-950 relative overflow-hidden">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-slate-500 uppercase tracking-[0.5em] text-sm mb-12">O Veredito</p>
        <blockquote className="text-4xl md:text-7xl font-light text-white italic leading-tight max-w-6xl mx-auto">
          "A análise de dados sem consciência é apenas <span className="text-sky-400 font-bold">ruído</span>. A consciência sem dados é apenas <span className="text-emerald-400 font-bold">ilusão</span>."
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-sky-500/30">
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="text-white font-black text-2xl tracking-tighter">LUCIANO FRANCISCO</div>
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition-colors">Estratégia</a>
            <a href="#" className="hover:text-white transition-colors">Dados</a>
            <a href="#" className="hover:text-white transition-colors">Consciência</a>
          </div>
          <a 
            href="https://chat.whatsapp.com/KI0aI6wcth72EYdw5Kj1oO" 
            target="_blank"
            className="px-6 py-2 bg-white text-black text-xs font-black rounded-full hover:scale-105 transition-transform"
          >
            ATENDIMENTO
          </a>
        </div>
      </nav>
      
      <Hero />
      <Services />
      <Ecosystem />
      <Quote />

      <footer className="py-20 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">VAMOS ESCALAR?</h2>
              <p className="text-slate-500 mb-8">
                Consultoria, Diagnóstico e Transformação. <br />
                Para empresas que buscam lucro e pessoas que buscam propósito.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/lucianofranciscoi" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/professorluciano" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="https://www.youtube.com/@LucianoFranciscoProfessor" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Youtube className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/lucianofranciscoi/" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><MessageCircle className="w-5 h-5" /></a>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="https://www.tiktok.com/@luciano.franciscoi" target="_blank" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">TikTok</a>
                <a href="https://k.kwai.com/u/@professorluciano/CmxBuT9z" target="_blank" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Kwai</a>
                <a href="https://www.threads.com/@lucianofranciscoi" target="_blank" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Threads</a>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-slate-600 text-xs uppercase tracking-widest mb-2">Desenvolvido por SAIAM</p>
              <p className="text-white font-bold">© 2026 Luciano Francisco</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://chat.whatsapp.com/KI0aI6wcth72EYdw5Kj1oO" 
        target="_blank"
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform z-[100]"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
