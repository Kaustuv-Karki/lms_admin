import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Tests', link: '/dashboard/test' }
];

const page = () => {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <Card>
          <CardHeader>
            <CardTitle>Analytical Writing</CardTitle>
            <CardDescription>Number of Questions: 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This section evaluates your ability to articulate and support
              complex ideas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quantitative Reasoning</CardTitle>
            <CardDescription>Number of Questions: 20</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This section tests your mathematical skills and understanding of
              quantitative concepts.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
};

export default page;
