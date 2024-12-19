import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/types";
import { formatTimeAgo } from "@/lib/format";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-green-500';
      case 'LIMITED':
        return 'bg-yellow-500';
      case 'UNAVAILABLE':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{resource.name}</h3>
          <p className="text-sm text-muted-foreground">
            Type: {resource.type.toLowerCase()}
          </p>
          <Badge className={getStatusColor(resource.status)}>
            {resource.status.toLowerCase()}
          </Badge>
          {resource.quantity && (
            <p className="text-sm mt-2">Quantity: {resource.quantity}</p>
          )}
          {resource.description && (
            <p className="text-sm mt-2">{resource.description}</p>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            Updated {formatTimeAgo(new Date(resource.updatedAt))}
          </p>
        </div>
      </div>
    </Card>
  );
}