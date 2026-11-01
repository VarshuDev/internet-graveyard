import React from 'react';
import { GraveStatus } from '@/types/graveyard';
import { cn } from '@/lib/utils';
import { ShieldCheck, AlertTriangle, HelpCircle, Flame, Skull, Ghost, PowerOff } from 'lucide-react';

interface StatusBadgeProps {
  status: GraveStatus;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  showIcon = true,
  className
}) => {
  const config = {
    ACTIVE: {
      label: 'ACTIVE',
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
      icon: ShieldCheck,
      description: 'Still functioning normally'
    },
    AT_RISK: {
      label: 'AT RISK',
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      dot: 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse',
      icon: AlertTriangle,
      description: 'Multiple signals indicate possible decline or impending shutdown'
    },
    ABANDONED: {
      label: 'ABANDONED',
      color: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
      dot: 'bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]',
      icon: HelpCircle,
      description: 'Still accessible but no longer maintained or updated'
    },
    CONFIRMED_DEAD: {
      label: 'CONFIRMED DEAD',
      color: 'text-red-400 border-red-500/30 bg-red-500/10',
      dot: 'bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]',
      icon: Skull,
      description: 'Officially discontinued or completely shut down'
    },
    OFFLINE: {
      label: 'OFFLINE',
      color: 'text-gray-400 border-gray-500/30 bg-gray-500/10',
      dot: 'bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.8)]',
      icon: PowerOff,
      description: 'Currently inaccessible but death is not officially confirmed'
    },
    ZOMBIE: {
      label: 'ZOMBIE',
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      dot: 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse',
      icon: Ghost,
      description: 'Domain/service exists, but original functionality is effectively gone'
    }
  }[status] || {
    label: status,
    color: 'text-gray-400 border-gray-700 bg-gray-800',
    dot: 'bg-gray-400',
    icon: HelpCircle,
    description: 'Unknown Status'
  };

  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 gap-1 sm:gap-1.5 font-mono font-bold tracking-wider leading-tight',
    md: 'text-xs sm:text-sm px-2.5 sm:px-3 py-1 gap-1.5 font-mono font-bold tracking-wider',
    lg: 'text-sm sm:text-base px-3.5 sm:px-4 py-1.5 gap-2 font-mono font-bold tracking-wider'
  }[size];

  return (
    <span
      title={config.description}
      className={cn(
        'inline-flex items-center whitespace-nowrap shrink-0 rounded-full border font-bold select-none backdrop-blur-sm transition-all shadow-sm',
        config.color,
        sizeClasses,
        className
      )}
    >
      <span className={cn('rounded-full shrink-0', size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2', config.dot)} />
      {showIcon && <Icon className={cn('shrink-0', size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />}
      <span className="leading-none">{config.label}</span>
    </span>
  );
};
