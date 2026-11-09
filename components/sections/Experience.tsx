'use client';

const contributions = [
  {
    metric: '242 TPS',
    title: 'Concurrent Java message dispatcher',
    challenge: 'Build a concurrent dispatcher capable of meeting and exceeding throughput requirements.',
    approach: 'Developed ThreadPoolExecutor-based concurrent message workflows and validated them through 50,000-request load tests.',
    impact: 'Achieved 242 average transactions per second, exceeding the 200 TPS target by 21%.',
    tech: 'Java · ThreadPoolExecutors · Concurrency · Load Testing',
  },
  {
    metric: '−60%',
    title: 'AWS KMS centralized key management',
    challenge: 'Reduce the operational complexity of encryption-key management while improving sensitive-data protection.',
    approach: 'Built a centralized AWS KMS Key Management System with automated rotation and DEK-based PII/PHI encryption.',
    impact: 'Reduced key-management overhead by approximately 60% and enabled centralized automation.',
    tech: 'AWS KMS · Encryption · DEK · PII/PHI Security',
  },
  {
    metric: '10+ scenarios',
    title: 'Kubernetes autoscaling validation',
    challenge: 'Validate infrastructure autoscaling and find issues before production deployment.',
    approach: 'Validated Karpenter autoscaling on AWS EKS across more than ten workload and configuration scenarios.',
    impact: 'Identified a production-blocking SQS configuration issue before deployment.',
    tech: 'AWS EKS · Kubernetes · Karpenter · SQS',
  },
  {
    metric: '−65%',
    title: 'Cloud cost optimization',
    challenge: 'Reduce infrastructure expenditure without compromising compute availability.',
    approach: 'Enabled EC2 Spot instance adoption for appropriate workloads.',
    impact: 'Enabled approximately 65% compute-cost savings.',
    tech: 'AWS EC2 · Spot Instances · Cloud Infrastructure',
  },
  {
    metric: '2M records',
    title: 'Distributed storage feasibility study',
    challenge: 'Evaluate RocksDB as a viable alternative to Redis for a large-scale storage requirement.',
    approach: 'Tested two million records across throughput, WAL configurations, and multi-instance behavior.',
    impact: 'Delivered a data-driven recommendation that prevented a high-risk Redis replacement migration.',
    tech: 'RocksDB · Redis · Benchmarking · Storage Engineering',
  },
  {
    metric: '30+ configs',
    title: 'Go HTTP connection pool proof of concept',
    challenge: 'Investigate Go HTTP pooling against Java implementations.',
    approach: 'Designed a configurable pool and integrated Prometheus, Grafana, and cAdvisor observability.',
    impact: 'Mapped CPU, memory, and throughput trade-offs against JDK 8 and JDK 21.',
    tech: 'Go · HTTP · Prometheus · Grafana · cAdvisor · JDK 8 · JDK 21',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <header className="sec-head">
        <p className="eyebrow">CHAPTER III</p>
        <h2>Engineering at <span>Tanla.</span></h2>
        <p className="sec-sub">Software Engineering Intern (SDE) · October 2025 – June 2026 · Hyderabad, India · On-site</p>
      </header>
      <div className="experience-flow">
        {contributions.map((contribution, index) => (
          <details className="experience-card" key={contribution.title}>
            <summary>
              <span>0{index + 1}</span>
              <div><h3>{contribution.title}</h3><p>{contribution.tech}</p></div>
              <b>{contribution.metric}</b>
              <i>+</i>
            </summary>
            <div className="experience-case-study">
              <article><small>CHALLENGE</small><p>{contribution.challenge}</p></article>
              <article><small>APPROACH</small><p>{contribution.approach}</p></article>
              <article><small>IMPACT</small><p>{contribution.impact}</p></article>
            </div>
          </details>
        ))}
      </div>
      <p className="experience-summary">The biggest takeaway from this experience was learning that engineering is not simply about implementing a solution. It is about understanding constraints, validating assumptions, measuring performance, identifying risks, and making informed technical decisions.</p>
    </section>
  );
}
