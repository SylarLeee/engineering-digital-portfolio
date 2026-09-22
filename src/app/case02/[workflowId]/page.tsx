import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Case02WorkflowDetailPanel } from "@/components/pages/Case02WorkflowDetailPanel";
import { isWorkflowId, workflowDetails, type WorkflowDetail } from "@/content/case02-workflow-details";

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(workflowDetails).map((workflowId) => ({ workflowId })); }

function StepNavigation({ current }: { current: WorkflowDetail["index"] }) {
  return <nav className="case02-detail-step-nav" aria-label="工作流详情切换">{(["01", "02", "03"] as const).map((step, index) => <Fragment key={step}><Link className={current === step ? "is-current" : ""} href={`/case02/workflow-${step}/`}>{step}</Link>{index < 2 && <ArrowRight size={14} aria-hidden="true" />}</Fragment>)}</nav>;
}

export default async function WorkflowDetailPage({ params }: { params: Promise<{ workflowId: string }> }) {
  const { workflowId } = await params;
  if (!isWorkflowId(workflowId)) notFound();
  const workflow = workflowDetails[workflowId];
  return (
    <main className={`case02-workflow-detail-page case02-workflow-detail-page--${workflow.theme}`}>
      <Container className="case02-workflow-detail-shell">
        <div className="case02-workflow-detail-route-toolbar">
          <p>CASE 02 — 工作流详情</p>
          <Link href="/case02/#case02-research-workflow-title"><ArrowLeft size={16} aria-hidden="true" />返回上一页</Link>
          <StepNavigation current={workflow.index} />
        </div>
        <Case02WorkflowDetailPanel workflow={workflow} />
      </Container>
    </main>
  );
}
