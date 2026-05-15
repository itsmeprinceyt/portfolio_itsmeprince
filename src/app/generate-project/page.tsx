"use client";
import { useState } from "react";
import { Plus, Trash2, Copy, Check } from "lucide-react";
import PageWrapper from "../(components)/PageWrapper";
import { Feature, FormState } from "../../types/project_generate.type";

const defaultForm: FormState = {
  id: "",
  name: "",
  description: "",
  date: "",
  banner: "",
  intro: "",
  features: [],
  dependencies: [],
  usage_examples: [],
  tags: [],
  live_enabled: false,
  live_url: "",
  github_enabled: false,
  github_url: "",
  youtube_enabled: false,
  youtube_url: "",
};

/* ── shared components (declared outside render) ── */

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
        {label}
      </p>
      <div className="flex-1 h-px bg-stone-900" />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[9px] tracking-[0.35em] uppercase text-stone-500">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "bg-transparent border border-stone-900 text-stone-300 text-sm px-3 py-2 outline-none focus:border-stone-600 transition-colors duration-200 placeholder:text-stone-700 w-full";

const textareaCls =
  "bg-transparent border border-stone-900 text-stone-300 text-sm px-3 py-2 outline-none focus:border-stone-600 transition-colors duration-200 placeholder:text-stone-700 w-full resize-none leading-loose";

type ListSectionProps = {
  label: string;
  field: "dependencies" | "usage_examples" | "tags";
  placeholder: string;
  items: string[];
  onAdd: () => void;
  onUpdate: (i: number, val: string) => void;
  onRemove: (i: number) => void;
};

function ListSection({
  label,
  placeholder,
  items,
  onAdd,
  onUpdate,
  onRemove,
}: ListSectionProps) {
  return (
    <div className="mb-12">
      <SectionDivider label={label} />
      <div className="flex flex-col gap-2">
        {items.map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              value={val}
              onChange={(e) => onUpdate(i, e.target.value)}
              placeholder={placeholder}
              className={inputCls}
            />
            <button
              onClick={() => onRemove(i)}
              className="cursor-pointer text-stone-700 hover:text-stone-400 transition-colors duration-200 shrink-0"
            >
              <Trash2 size={14} strokeWidth={1} />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onAdd}
        className="cursor-pointer flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-stone-600 hover:text-stone-400 transition-colors duration-200 mt-3"
      >
        <Plus size={11} strokeWidth={1} />
        Add item
      </button>
    </div>
  );
}

/* ── page ── */

export default function ProjectGeneratorPage() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const set = (key: keyof FormState, value: unknown) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const addFeature = () =>
    set("features", [...form.features, { title: "", detail: "" }]);

  const updateFeature = (i: number, key: keyof Feature, val: string) =>
    set(
      "features",
      form.features.map((f, idx) => (idx === i ? { ...f, [key]: val } : f))
    );

  const removeFeature = (i: number) =>
    set(
      "features",
      form.features.filter((_, idx) => idx !== i)
    );

  const addListItem = (key: "dependencies" | "usage_examples" | "tags") =>
    set(key, [...(form[key] as string[]), ""]);

  const updateListItem = (
    key: "dependencies" | "usage_examples" | "tags",
    i: number,
    val: string
  ) =>
    set(
      key,
      (form[key] as string[]).map((v, idx) => (idx === i ? val : v))
    );

  const removeListItem = (
    key: "dependencies" | "usage_examples" | "tags",
    i: number
  ) =>
    set(
      key,
      (form[key] as string[]).filter((_, idx) => idx !== i)
    );

  const generate = () => {
    const q = (s: string) => `\`${s}\``;
    const indent = (s: string, n = 2) =>
      s
        .split("\n")
        .map((l) => " ".repeat(n) + l)
        .join("\n");

    const featuresStr =
      form.features.length > 0
        ? `features: [\n${form.features
            .map(
              (f) =>
                `        {\n          title: ${q(
                  f.title
                )},\n          detail: ${q(f.detail)},\n        }`
            )
            .join(",\n")},\n      ],`
        : "";

    const depsStr =
      form.dependencies.filter(Boolean).length > 0
        ? `dependencies: [\n${form.dependencies
            .filter(Boolean)
            .map((d) => `        ${q(d)}`)
            .join(",\n")},\n      ],`
        : "";

    const usageStr =
      form.usage_examples.filter(Boolean).length > 0
        ? `usage_examples: [\n${form.usage_examples
            .filter(Boolean)
            .map((u) => `        ${q(u)}`)
            .join(",\n")},\n      ],`
        : "";

    const tagsStr =
      form.tags.filter(Boolean).length > 0
        ? `[${form.tags
            .filter(Boolean)
            .map((t) => q(t))
            .join(", ")}]`
        : "[]";

    const lines = [
      `{`,
      `  id: ${q(form.id)},`,
      `  name: ${q(form.name)},`,
      `  description: ${q(form.description)},`,
      `  full_description: {`,
      `    intro: ${q(form.intro)},`,
      featuresStr ? indent(featuresStr, 4) : null,
      depsStr ? indent(depsStr, 4) : null,
      usageStr ? indent(usageStr, 4) : null,
      `  },`,
      `  tags: ${tagsStr},`,
      `  links: {`,
      `    live: {`,
      `      url: ${q(form.live_url)},`,
      `      enabled: ${form.live_enabled},`,
      `    },`,
      `    github: {`,
      `      url: ${q(form.github_url)},`,
      `      enabled: ${form.github_enabled},`,
      `    },`,
      `    youtube: {`,
      `      url: ${q(form.youtube_url)},`,
      `      enabled: ${form.youtube_enabled},`,
      `    },`,
      `  },`,
      form.banner ? `  banner: ${q(form.banner)},` : null,
      form.date ? `  date: ${q(form.date)},` : null,
      `},`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    setOutput(lines);
    setTimeout(() => {
      document
        .getElementById("output-block")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16">
          <div className="border-l border-stone-950 pl-6">
            <h1 className="text-4xl md:text-5xl font-cinzel tracking-wide uppercase leading-none mb-4">
              Project Generator
            </h1>
            <p className="text-sm text-stone-600 leading-loose">
              Fill in the fields below and hit Generate to produce a
              ready-to-paste TypeScript object for{" "}
              <span className="text-stone-400">ProjectData.util.ts</span>.
            </p>
          </div>
        </div>

        {/* ── Core ── */}
        <div className="mb-12">
          <SectionDivider label="Core" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="ID (kebab-case)">
              <input
                value={form.id}
                onChange={(e) => set("id", e.target.value)}
                placeholder="my-cool-project"
                className={inputCls}
              />
            </Field>
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="My Cool Project"
                className={inputCls}
              />
            </Field>
            <Field label="Date (DD-MM-YYYY)">
              <input
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                placeholder="25-04-2026"
                className={inputCls}
              />
            </Field>
            <Field label="Banner path">
              <input
                value={form.banner}
                onChange={(e) => set("banner", e.target.value)}
                placeholder="/projects/my-cool-project/1.png"
                className={inputCls}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Short description (card)">
                <textarea
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  placeholder="One-liner shown on the project card"
                  rows={2}
                  className={textareaCls}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* ── About ── */}
        <div className="mb-12">
          <SectionDivider label="About / Intro" />
          <Field label="Full intro paragraph">
            <textarea
              value={form.intro}
              onChange={(e) => set("intro", e.target.value)}
              placeholder="Longer paragraph describing what the project is and what it does…"
              rows={4}
              className={textareaCls}
            />
          </Field>
        </div>

        {/* ── Features ── */}
        <div className="mb-12">
          <SectionDivider label="Features (optional)" />
          <div className="flex flex-col gap-3">
            {form.features.map((feat, i) => (
              <div key={i} className="border border-stone-950 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-stone-500 tabular-nums tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => removeFeature(i)}
                    className="cursor-pointer text-stone-700 hover:text-stone-400 transition-colors duration-200"
                  >
                    <Trash2 size={13} strokeWidth={1} />
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <Field label="Title">
                    <input
                      value={feat.title}
                      onChange={(e) =>
                        updateFeature(i, "title", e.target.value)
                      }
                      placeholder="Feature title"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Detail">
                    <textarea
                      value={feat.detail}
                      onChange={(e) =>
                        updateFeature(i, "detail", e.target.value)
                      }
                      placeholder="Short explanation of this feature"
                      rows={2}
                      className={textareaCls}
                    />
                  </Field>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={addFeature}
            className="cursor-pointer flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-stone-600 hover:text-stone-400 transition-colors duration-200 mt-3"
          >
            <Plus size={11} strokeWidth={1} />
            Add feature
          </button>
        </div>

        {/* ── Dependencies ── */}
        <ListSection
          label="Dependencies (optional)"
          field="dependencies"
          placeholder="framer-motion"
          items={form.dependencies}
          onAdd={() => addListItem("dependencies")}
          onUpdate={(i, val) => updateListItem("dependencies", i, val)}
          onRemove={(i) => removeListItem("dependencies", i)}
        />

        {/* ── Use Cases ── */}
        <ListSection
          label="Use Cases (optional)"
          field="usage_examples"
          placeholder="Managing multiple accounts from a single dashboard"
          items={form.usage_examples}
          onAdd={() => addListItem("usage_examples")}
          onUpdate={(i, val) => updateListItem("usage_examples", i, val)}
          onRemove={(i) => removeListItem("usage_examples", i)}
        />

        {/* ── Tags ── */}
        <ListSection
          label="Tech Stack / Tags"
          field="tags"
          placeholder="next.js"
          items={form.tags}
          onAdd={() => addListItem("tags")}
          onUpdate={(i, val) => updateListItem("tags", i, val)}
          onRemove={(i) => removeListItem("tags", i)}
        />

        {/* ── Links ── */}
        <div className="mb-12">
          <SectionDivider label="Links" />
          <div className="flex flex-col gap-6">
            {(
              [
                { key: "live", label: "Live URL" },
                { key: "github", label: "GitHub URL" },
                { key: "youtube", label: "YouTube URL" },
              ] as const
            ).map(({ key, label }) => (
              <div key={key} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      set(
                        `${key}_enabled` as keyof FormState,
                        !form[`${key}_enabled` as keyof FormState]
                      )
                    }
                    className={`cursor-pointer w-7 h-4 border transition-colors duration-200 relative ${
                      form[`${key}_enabled` as keyof FormState]
                        ? "border-stone-400 bg-stone-400"
                        : "border-stone-700 bg-transparent"
                    }`}
                  >
                    {form[`${key}_enabled` as keyof FormState] && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check
                          size={9}
                          className="text-black"
                          strokeWidth={3}
                        />
                      </span>
                    )}
                  </button>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500">
                    {label}
                  </span>
                </div>
                <input
                  value={form[`${key}_url` as keyof FormState] as string}
                  onChange={(e) =>
                    set(`${key}_url` as keyof FormState, e.target.value)
                  }
                  placeholder="https://..."
                  className={inputCls}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Generate ── */}
        <div className="mb-16">
          <button
            onClick={generate}
            className="cursor-pointer w-full border border-stone-800 hover:border-stone-600 py-4 text-[11px] tracking-[0.5em] uppercase text-stone-400 hover:text-stone-200 transition-all duration-200"
          >
            Generate
          </button>
        </div>

        {/* ── Output ── */}
        {output && (
          <div id="output-block" className="mb-24">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                Output
              </p>
              <div className="flex-1 h-px bg-stone-900" />
              <button
                onClick={copyToClipboard}
                className="cursor-pointer flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-stone-500 hover:text-stone-300 transition-colors duration-200"
              >
                {copied ? (
                  <Check size={11} strokeWidth={1.5} />
                ) : (
                  <Copy size={11} strokeWidth={1.5} />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="text-[12px] leading-loose text-stone-400 bg-stone-950/40 border border-stone-900 p-6 overflow-x-auto whitespace-pre font-mono">
              {output}
            </pre>
          </div>
        )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
