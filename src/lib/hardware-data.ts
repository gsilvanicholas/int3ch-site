export interface ComponenteHardware {
  id: string;
  label: string;
  watts: number;
  /** Tier de desempenho relativo em jogos, escala 1-10, comparavel entre CPU e GPU. */
  tier: number;
  grupo: string;
}

export const CPU_LIST: ComponenteHardware[] = [
  // AMD Ryzen (AM4)
  { id: 'ryzen3-3200g', label: 'Ryzen 3 3200G', watts: 65, tier: 2.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-3400g', label: 'Ryzen 5 3400G', watts: 65, tier: 3, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-3600', label: 'Ryzen 5 3600', watts: 88, tier: 4.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen7-3700x', label: 'Ryzen 7 3700X', watts: 88, tier: 5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen9-3900x', label: 'Ryzen 9 3900X', watts: 142, tier: 5.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen3-4100', label: 'Ryzen 3 4100', watts: 65, tier: 3, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-5500', label: 'Ryzen 5 5500', watts: 65, tier: 4.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-5600g', label: 'Ryzen 5 5600G', watts: 65, tier: 4.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-5600', label: 'Ryzen 5 5600', watts: 76, tier: 5.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen5-5600x', label: 'Ryzen 5 5600X', watts: 88, tier: 6, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen7-5700g', label: 'Ryzen 7 5700G', watts: 65, tier: 5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen7-5700x', label: 'Ryzen 7 5700X', watts: 88, tier: 6.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen7-5800x', label: 'Ryzen 7 5800X', watts: 142, tier: 7, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen7-5800x3d', label: 'Ryzen 7 5800X3D', watts: 142, tier: 8.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen9-5900x', label: 'Ryzen 9 5900X', watts: 142, tier: 7.5, grupo: 'AMD Ryzen (AM4)' },
  { id: 'ryzen9-5950x', label: 'Ryzen 9 5950X', watts: 142, tier: 7.5, grupo: 'AMD Ryzen (AM4)' },

  // AMD Ryzen (AM5)
  { id: 'ryzen5-7500f', label: 'Ryzen 5 7500F', watts: 65, tier: 6.5, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen5-8600g', label: 'Ryzen 5 8600G', watts: 65, tier: 6.5, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen5-7600', label: 'Ryzen 5 7600', watts: 88, tier: 7, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen5-7600x', label: 'Ryzen 5 7600X', watts: 105, tier: 7.2, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen7-7700', label: 'Ryzen 7 7700', watts: 88, tier: 7.5, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen7-7700x', label: 'Ryzen 7 7700X', watts: 142, tier: 8, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen7-7800x3d', label: 'Ryzen 7 7800X3D', watts: 120, tier: 9.5, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-7900', label: 'Ryzen 9 7900', watts: 88, tier: 8, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-7900x', label: 'Ryzen 9 7900X', watts: 170, tier: 8.5, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-7900x3d', label: 'Ryzen 9 7900X3D', watts: 120, tier: 9, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-7950x', label: 'Ryzen 9 7950X', watts: 230, tier: 9, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-7950x3d', label: 'Ryzen 9 7950X3D', watts: 144, tier: 9.8, grupo: 'AMD Ryzen (AM5)' },
  { id: 'ryzen9-9950x', label: 'Ryzen 9 9950X', watts: 170, tier: 9.5, grupo: 'AMD Ryzen (AM5)' },

  // Intel 10a/11a
  { id: 'i3-10100f', label: 'Core i3-10100F', watts: 65, tier: 3.5, grupo: 'Intel (10ª-11ª geração)' },
  { id: 'i5-10400f', label: 'Core i5-10400F', watts: 65, tier: 5, grupo: 'Intel (10ª-11ª geração)' },
  { id: 'i5-11400f', label: 'Core i5-11400F', watts: 65, tier: 5.5, grupo: 'Intel (10ª-11ª geração)' },
  { id: 'i7-10700f', label: 'Core i7-10700F', watts: 65, tier: 6, grupo: 'Intel (10ª-11ª geração)' },
  { id: 'i7-11700f', label: 'Core i7-11700F', watts: 65, tier: 6.5, grupo: 'Intel (10ª-11ª geração)' },

  // Intel 12a-14a
  { id: 'i3-12100f', label: 'Core i3-12100F', watts: 89, tier: 5.5, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i5-12400f', label: 'Core i5-12400F', watts: 117, tier: 6.5, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i5-12600k', label: 'Core i5-12600K', watts: 150, tier: 7.5, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i5-13400f', label: 'Core i5-13400F', watts: 148, tier: 7, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i5-13600k', label: 'Core i5-13600K', watts: 181, tier: 8.5, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i5-14600k', label: 'Core i5-14600K', watts: 181, tier: 8.7, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i7-12700f', label: 'Core i7-12700F', watts: 190, tier: 8, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i7-13700f', label: 'Core i7-13700F', watts: 219, tier: 9, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i7-14700f', label: 'Core i7-14700F', watts: 219, tier: 9.2, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i9-12900k', label: 'Core i9-12900K', watts: 241, tier: 9, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i9-13900f', label: 'Core i9-13900F', watts: 253, tier: 9.7, grupo: 'Intel (12ª-14ª geração)' },
  { id: 'i9-14900f', label: 'Core i9-14900F', watts: 253, tier: 9.9, grupo: 'Intel (12ª-14ª geração)' },
];

export const GPU_LIST: ComponenteHardware[] = [
  { id: 'integrada', label: 'Sem placa dedicada (vídeo integrado)', watts: 0, tier: 0.5, grupo: '' },

  // NVIDIA GTX 10/16
  { id: 'gt1030', label: 'GT 1030', watts: 30, tier: 1, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1050ti', label: 'GTX 1050 Ti', watts: 75, tier: 2, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1060', label: 'GTX 1060', watts: 120, tier: 2.7, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1650', label: 'GTX 1650', watts: 75, tier: 2.3, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1650super', label: 'GTX 1650 Super', watts: 100, tier: 2.8, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1660', label: 'GTX 1660', watts: 120, tier: 3.2, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1660ti', label: 'GTX 1660 Ti', watts: 120, tier: 3.5, grupo: 'NVIDIA GTX (10/16 série)' },
  { id: 'gtx1660super', label: 'GTX 1660 Super', watts: 125, tier: 3.5, grupo: 'NVIDIA GTX (10/16 série)' },

  // NVIDIA RTX 20/30
  { id: 'rtx2060', label: 'RTX 2060', watts: 160, tier: 3.8, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx2060super', label: 'RTX 2060 Super', watts: 175, tier: 4.2, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx2070super', label: 'RTX 2070 Super', watts: 215, tier: 4.8, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx2080super', label: 'RTX 2080 Super', watts: 250, tier: 5.3, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3050', label: 'RTX 3050', watts: 130, tier: 3.3, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3060', label: 'RTX 3060', watts: 170, tier: 4.3, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3060ti', label: 'RTX 3060 Ti', watts: 200, tier: 5, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3070', label: 'RTX 3070', watts: 220, tier: 5.5, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3070ti', label: 'RTX 3070 Ti', watts: 290, tier: 5.8, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3080', label: 'RTX 3080', watts: 320, tier: 6.5, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3080ti', label: 'RTX 3080 Ti', watts: 350, tier: 6.9, grupo: 'NVIDIA RTX 20/30 série' },
  { id: 'rtx3090', label: 'RTX 3090', watts: 350, tier: 7, grupo: 'NVIDIA RTX 20/30 série' },

  // NVIDIA RTX 40
  { id: 'rtx4060', label: 'RTX 4060', watts: 115, tier: 4.5, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4060ti', label: 'RTX 4060 Ti', watts: 160, tier: 5.2, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4060ti16', label: 'RTX 4060 Ti 16GB', watts: 165, tier: 5.3, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4070', label: 'RTX 4070', watts: 200, tier: 6.2, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4070super', label: 'RTX 4070 Super', watts: 220, tier: 6.7, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4070ti', label: 'RTX 4070 Ti', watts: 285, tier: 7.2, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4070tisuper', label: 'RTX 4070 Ti Super', watts: 285, tier: 7.5, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4080', label: 'RTX 4080', watts: 320, tier: 8.3, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4080super', label: 'RTX 4080 Super', watts: 320, tier: 8.5, grupo: 'NVIDIA RTX 40 série' },
  { id: 'rtx4090', label: 'RTX 4090', watts: 450, tier: 10, grupo: 'NVIDIA RTX 40 série' },

  // NVIDIA RTX 50
  { id: 'rtx5060', label: 'RTX 5060', watts: 145, tier: 4.8, grupo: 'NVIDIA RTX 50 série' },
  { id: 'rtx5060ti', label: 'RTX 5060 Ti', watts: 180, tier: 5.6, grupo: 'NVIDIA RTX 50 série' },
  { id: 'rtx5070', label: 'RTX 5070', watts: 250, tier: 7.4, grupo: 'NVIDIA RTX 50 série' },
  { id: 'rtx5070ti', label: 'RTX 5070 Ti', watts: 300, tier: 8.4, grupo: 'NVIDIA RTX 50 série' },
  { id: 'rtx5080', label: 'RTX 5080', watts: 360, tier: 8.8, grupo: 'NVIDIA RTX 50 série' },
  { id: 'rtx5090', label: 'RTX 5090', watts: 575, tier: 11.5, grupo: 'NVIDIA RTX 50 série' },

  // AMD RX 500/5000
  { id: 'rx570', label: 'RX 570', watts: 150, tier: 2.2, grupo: 'AMD RX 500/5000 série' },
  { id: 'rx580', label: 'RX 580', watts: 185, tier: 2.5, grupo: 'AMD RX 500/5000 série' },
  { id: 'rx5500xt', label: 'RX 5500 XT', watts: 130, tier: 3, grupo: 'AMD RX 500/5000 série' },
  { id: 'rx5600xt', label: 'RX 5600 XT', watts: 150, tier: 3.6, grupo: 'AMD RX 500/5000 série' },
  { id: 'rx5700xt', label: 'RX 5700 XT', watts: 225, tier: 4.6, grupo: 'AMD RX 500/5000 série' },

  // AMD RX 6000
  { id: 'rx6400', label: 'RX 6400', watts: 53, tier: 1.5, grupo: 'AMD RX 6000 série' },
  { id: 'rx6500xt', label: 'RX 6500 XT', watts: 107, tier: 2, grupo: 'AMD RX 6000 série' },
  { id: 'rx6600', label: 'RX 6600', watts: 132, tier: 3.4, grupo: 'AMD RX 6000 série' },
  { id: 'rx6600xt', label: 'RX 6600 XT', watts: 160, tier: 4, grupo: 'AMD RX 6000 série' },
  { id: 'rx6650xt', label: 'RX 6650 XT', watts: 180, tier: 4.2, grupo: 'AMD RX 6000 série' },
  { id: 'rx6700xt', label: 'RX 6700 XT', watts: 230, tier: 5.2, grupo: 'AMD RX 6000 série' },
  { id: 'rx6750xt', label: 'RX 6750 XT', watts: 250, tier: 5.5, grupo: 'AMD RX 6000 série' },
  { id: 'rx6800', label: 'RX 6800', watts: 250, tier: 6, grupo: 'AMD RX 6000 série' },
  { id: 'rx6800xt', label: 'RX 6800 XT', watts: 300, tier: 6.8, grupo: 'AMD RX 6000 série' },
  { id: 'rx6900xt', label: 'RX 6900 XT', watts: 300, tier: 7, grupo: 'AMD RX 6000 série' },
  { id: 'rx6950xt', label: 'RX 6950 XT', watts: 335, tier: 7.2, grupo: 'AMD RX 6000 série' },

  // AMD RX 7000
  { id: 'rx7600', label: 'RX 7600', watts: 165, tier: 4.1, grupo: 'AMD RX 7000 série' },
  { id: 'rx7600xt', label: 'RX 7600 XT', watts: 190, tier: 4.4, grupo: 'AMD RX 7000 série' },
  { id: 'rx7700xt', label: 'RX 7700 XT', watts: 245, tier: 5.7, grupo: 'AMD RX 7000 série' },
  { id: 'rx7800xt', label: 'RX 7800 XT', watts: 263, tier: 6.5, grupo: 'AMD RX 7000 série' },
  { id: 'rx7900gre', label: 'RX 7900 GRE', watts: 260, tier: 7, grupo: 'AMD RX 7000 série' },
  { id: 'rx7900xt', label: 'RX 7900 XT', watts: 315, tier: 7.8, grupo: 'AMD RX 7000 série' },
  { id: 'rx7900xtx', label: 'RX 7900 XTX', watts: 355, tier: 8.5, grupo: 'AMD RX 7000 série' },
];

export function agruparPorGrupo(lista: ComponenteHardware[]): Map<string, ComponenteHardware[]> {
  const grupos = new Map<string, ComponenteHardware[]>();
  for (const item of lista) {
    const chave = item.grupo || '';
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave)!.push(item);
  }
  return grupos;
}
