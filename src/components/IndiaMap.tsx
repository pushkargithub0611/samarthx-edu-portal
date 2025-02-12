import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const containerStyle = {
  width: '100%',
  height: '300px'  // Reduced height from 400px
};

const stateCoordinates: { [key: string]: { lat: number; lng: number } } = {
  Maharashtra: { lat: 19.7515, lng: 75.7139 },
  Karnataka: { lat: 15.3173, lng: 75.7139 },
  Gujarat: { lat: 22.2587, lng: 71.1924 },
  Rajasthan: { lat: 27.0238, lng: 74.2179 },
  "Madhya Pradesh": { lat: 22.9734, lng: 78.6569 },
  "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
  Bihar: { lat: 25.0961, lng: 85.3131 },
  "West Bengal": { lat: 22.9868, lng: 87.8550 },
  "Tamil Nadu": { lat: 11.1271, lng: 78.6569 },
  Kerala: { lat: 10.8505, lng: 76.2711 },
  "Andhra Pradesh": { lat: 15.9129, lng: 79.7400 },
  Telangana: { lat: 17.1231, lng: 79.2088 },
  Odisha: { lat: 20.9517, lng: 85.0985 },
  Chhattisgarh: { lat: 21.2787, lng: 81.8661 },
  Punjab: { lat: 31.1471, lng: 75.3412 },
  Haryana: { lat: 29.0588, lng: 76.0856 }
};

type MetricType = 
  | 'region'
  | 'drinkingWater'
  | 'enrollment'
  | 'dropout'
  | 'computers'
  | 'electricity'
  | 'boysToilets'
  | 'girlsToilets';

interface IndiaMapProps {
  onStateSelect: (state: string) => void;
  selectedState: string | null;
}

const IndiaMap = ({ onStateSelect, selectedState }: IndiaMapProps) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('region');

  // Mock data for demonstration - replace with actual data
  const mockMetricData: { [key: string]: { [key: string]: number } } = {
    Maharashtra: {
      drinkingWater: 85.2,
      enrollment: 92.5,
      dropout: 4.3,
      computers: 76.8,
      electricity: 98.2,
      boysToilets: 95.6,
      girlsToilets: 94.8
    }
  };

  const getMetricValue = (state: string | null, metric: MetricType) => {
    if (!state || metric === 'region' || !mockMetricData[state]) return null;
    return mockMetricData[state][metric];
  };

  const getMetricLabel = (value: number | null, metric: MetricType) => {
    if (value === null) return 'No data available';
    switch (metric) {
      case 'drinkingWater':
      case 'computers':
      case 'electricity':
      case 'boysToilets':
      case 'girlsToilets':
        return `${value}%`;
      case 'enrollment':
        return `${value}% enrolled`;
      case 'dropout':
        return `${value}% dropout rate`;
      default:
        return `${value}`;
    }
  };

  const handleMarkerClick = (stateName: string) => {
    onStateSelect(stateName);
  };

  const center = selectedState && stateCoordinates[selectedState]
    ? stateCoordinates[selectedState]
    : { lat: 20.5937, lng: 78.9629 };

  const options = {
    restriction: {
      latLngBounds: {
        north: 37.0902,
        south: 8.4077,
        west: 68.1766,
        east: 97.4025,
      },
      strictBounds: true,
    },
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
  };

  const filterStates = (states: [string, { lat: number; lng: number }][]) => {
    if (selectedMetric !== 'region') return states;
    if (regionFilter === 'all') return states;
    if (regionFilter === 'north') {
      return states.filter(([_, coords]) => coords.lat > 23);
    }
    return states.filter(([_, coords]) => coords.lat <= 23);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 p-1">
      <Card className="p-2 space-y-2 md:col-span-3">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">Select State</h3>
          <Select value={selectedState || ''} onValueChange={onStateSelect}>
            <SelectTrigger className="h-8">
              <SelectValue placeholder="Choose a state" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-md">
              {Object.keys(stateCoordinates).map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">View Metrics</h3>
          <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto pr-1">
            {metrics.map((metric) => (
              <Button 
                key={metric.id}
                variant={selectedMetric === metric.id ? 'default' : 'outline'} 
                onClick={() => setSelectedMetric(metric.id as MetricType)}
                className="justify-start text-left min-h-[48px] py-2 text-xs leading-normal whitespace-normal"
              >
                {metric.label}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      <div className="md:col-span-6">
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={selectedState ? 7 : 5}
            options={options}
          >
            {filterStates(Object.entries(stateCoordinates)).map(([stateName, coords]) => (
              <Marker
                key={stateName}
                position={coords}
                onClick={() => handleMarkerClick(stateName)}
                options={{
                  icon: {
                    url: `data:image/svg+xml,${encodeURIComponent(`
                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" fill="${selectedState === stateName ? '#F97316' : '#1e40af'}" 
                          stroke="white" stroke-width="2"/>
                      </svg>
                    `)}`
                  }
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      <Card className="p-2 md:col-span-3 flex flex-col">
        <h3 className="text-sm font-semibold mb-2">Statistics</h3>
        {selectedState && selectedMetric !== 'region' ? (
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Selected State</p>
              <p className="text-lg font-bold text-primary">{selectedState}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Selected Metric</p>
              <p className="text-base">{metrics.find(m => m.id === selectedMetric)?.label}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Value</p>
              <p className="text-2xl font-bold text-primary">
                {getMetricLabel(getMetricValue(selectedState, selectedMetric), selectedMetric)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
            Select a state and metric to view statistics
          </div>
        )}
      </Card>
    </div>
  );
};

export default IndiaMap;
