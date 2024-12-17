import DashboardSkeleton from "@/app/ui/skeletons";

// This Loading function has been overridden by the Suspense component,
// so there will be no side effects even if you delete this file.
export default function Loading() {
  return <DashboardSkeleton />;
}
