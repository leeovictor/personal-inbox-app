import React from 'react';
import { Button, Card } from './components';

export const ComponentDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Design System</h1>
          <p className="text-gray-400">Button and Card components preview</p>
        </div>

        {/* Button Variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Button Variants</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primary Variant */}
            <Card>
              <Card.Header title="Primary" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </div>
              </Card.Content>
            </Card>

            {/* Secondary Variant */}
            <Card>
              <Card.Header title="Secondary" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm">
                    Small
                  </Button>
                  <Button variant="secondary" size="md">
                    Medium
                  </Button>
                  <Button variant="secondary" size="lg">
                    Large
                  </Button>
                </div>
              </Card.Content>
            </Card>

            {/* Ghost Variant */}
            <Card>
              <Card.Header title="Ghost" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost" size="sm">
                    Small
                  </Button>
                  <Button variant="ghost" size="md">
                    Medium
                  </Button>
                  <Button variant="ghost" size="lg">
                    Large
                  </Button>
                </div>
              </Card.Content>
            </Card>

            {/* Outline Variant */}
            <Card>
              <Card.Header title="Outline" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Small
                  </Button>
                  <Button variant="outline" size="md">
                    Medium
                  </Button>
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                </div>
              </Card.Content>
            </Card>

            {/* Destructive Variant */}
            <Card>
              <Card.Header title="Destructive" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="destructive" size="sm">
                    Small
                  </Button>
                  <Button variant="destructive" size="md">
                    Medium
                  </Button>
                  <Button variant="destructive" size="lg">
                    Large
                  </Button>
                </div>
              </Card.Content>
            </Card>

            {/* Disabled State */}
            <Card>
              <Card.Header title="Disabled" />
              <Card.Content className="!py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* Card Example */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Card Component</h2>
          <Card>
            <Card.Header
              title="Card Title"
              description="This is a card component with header, content, and footer sections"
            />
            <Card.Content>
              <p className="text-gray-300">
                Cards are fundamental building blocks for organizing content. They can contain
                any content and support flexible sub-components for structure.
              </p>
            </Card.Content>
            <Card.Footer>
              <Button variant="primary" size="sm">
                Action
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};
